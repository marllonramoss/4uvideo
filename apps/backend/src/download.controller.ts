import {
  Controller,
  Get,
  Query,
  Res,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';
import { spawn } from 'child_process';
import * as ffmpeg from 'fluent-ffmpeg';
import * as ffmpegPath from 'ffmpeg-static';

@Controller()
export class DownloadController {
  @Get('download')
  async download(
    @Query('url') url: string,
    @Query('format') format: string,
    @Res() res: Response,
  ) {
    console.log('--- Início do download (yt-dlp + ffmpeg) ---');
    console.log('URL recebida:', url);
    console.log('Formato recebido:', format);

    if (!url || !format) {
      throw new BadRequestException('Missing url or format');
    }
    if (!/^https?:\/\/(www\.)?youtube\.com\/watch\?v=/.test(url) && !/^https?:\/\/youtu\.be\//.test(url)) {
      throw new BadRequestException('Invalid YouTube URL');
    }

    const ext = format === 'mp3' ? 'mp3' : 'mp4';
    res.setHeader('Content-Disposition', `attachment; filename="video.${ext}"`);
    res.setHeader('Content-Type', format === 'mp3' ? 'audio/mpeg' : 'video/mp4');

    if (format === 'mp3') {
      // Para MP3: baixar WAV com yt-dlp e converter para MP3 com ffmpeg
      const ytdlpArgs = ['-x', '--audio-format', 'wav', '-o', '-', url];
      const ytdlp = spawn('/usr/local/bin/yt-dlp', ytdlpArgs);

      ffmpeg()
        .input(ytdlp.stdout)
        .setFfmpegPath(ffmpegPath as unknown as string)
        .format('mp3')
        .audioCodec('libmp3lame')
        .audioBitrate(192)
        .audioChannels(2)
        .audioFrequency(44100)
        .on('start', (cmd) => {
          console.log('FFmpeg iniciado:', cmd);
        })
        .on('error', (err) => {
          console.error('FFmpeg error:', err);
          if (!res.headersSent) {
            res.status(500).send('Erro ao converter para MP3: ' + err.message);
          }
        })
        .on('end', () => {
          console.log('Conversão MP3 finalizada com sucesso!');
        })
        .pipe(res, { end: true });

      res.on('close', () => {
        if (ytdlp) {
          ytdlp.kill('SIGKILL');
        }
      });

      ytdlp.stderr.on('data', (data) => {
        console.error('yt-dlp error:', data.toString());
      });

      ytdlp.on('close', (code) => {
        if (code !== 0) {
          console.error('yt-dlp process exited with code', code);
        }
      });
    } else {
      // Para MP4: usar yt-dlp diretamente
      const args = ['-f', 'bestvideo+bestaudio', '-o', '-', url];
      const ytdlp = spawn('/usr/local/bin/yt-dlp', args);

      let totalBytes = 0;
      ytdlp.stdout.on('data', (chunk) => {
        totalBytes += chunk.length;
      });
      ytdlp.stdout.pipe(res);

      res.on('close', () => {
        if (ytdlp) {
          ytdlp.kill('SIGKILL');
        }
        console.log('Total de bytes enviados:', totalBytes);
      });

      ytdlp.stderr.on('data', (data) => {
        console.error('yt-dlp error:', data.toString());
      });

      ytdlp.on('close', (code) => {
        if (code !== 0) {
          console.error('yt-dlp process exited with code', code);
          if (!res.headersSent) {
            res.status(500).send('Erro ao baixar vídeo com yt-dlp');
          }
        } else {
          console.log('yt-dlp download finalizado com sucesso!');
        }
      });
    }
  }

  @Get('test-controller')
  testController() {
    return {
      message: 'DownloadController está funcionando!',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
} 