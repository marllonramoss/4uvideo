"use client";

import { useState } from "react";
import { Download, Youtube, Music, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DownloadFormData, DownloadStatus } from "@/types";
import { cleanYouTubeUrl, isValidYouTubeUrl } from "@/lib/utils";

export function DownloadForm() {
  const [formData, setFormData] = useState<DownloadFormData>({
    url: "",
    format: "mp4",
  });
  const [downloadStatus, setDownloadStatus] = useState<DownloadStatus>({
    status: "idle",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.url.trim()) {
      setDownloadStatus({
        status: "error",
        message: "Por favor, insira uma URL válida do YouTube",
      });
      return;
    }

    // Limpar e validar a URL do YouTube
    const cleanedUrl = cleanYouTubeUrl(formData.url.trim());
    console.log('Frontend: URL original:', formData.url);
    console.log('Frontend: URL limpa:', cleanedUrl);

    if (!isValidYouTubeUrl(cleanedUrl)) {
      setDownloadStatus({
        status: "error",
        message: "Por favor, insira uma URL válida do YouTube",
      });
      return;
    }

    setDownloadStatus({ status: "loading" });

    try {
      const apiUrl = `http://localhost:4000/download?url=${encodeURIComponent(cleanedUrl)}&format=${formData.format}`;
      console.log('Frontend: Fazendo requisição para:', apiUrl);
      
      // Chamada para o backend na porta 4000
      const response = await fetch(apiUrl);
      
      console.log('Frontend: Status da resposta:', response.status);
      console.log('Frontend: Headers da resposta:', Object.fromEntries(response.headers.entries()));
      
      if (response.ok) {
        console.log('Frontend: Iniciando download do arquivo...');
        const blob = await response.blob();
        console.log('Frontend: Tamanho do arquivo:', blob.size, 'bytes');
        
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `video.${formData.format}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        console.log('Frontend: Download iniciado com sucesso!');
        setDownloadStatus({
          status: "success",
          message: "Download iniciado com sucesso!",
        });
      } else {
        const errorText = await response.text();
        console.error('Frontend: Erro na resposta:', response.status, errorText);
        throw new Error(`Erro ${response.status}: ${errorText}`);
      }
    } catch (error) {
      console.error('Frontend: Erro no download:', error);
      setDownloadStatus({
        status: "error",
        message: `Erro ao processar o download: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, url: e.target.value }));
    if (downloadStatus.status === "error") {
      setDownloadStatus({ status: "idle" });
    }
  };

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, format: e.target.value as 'mp3' | 'mp4' }));
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-zinc-800 border-zinc-700">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
          <Youtube className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-white">YouTube Downloader</CardTitle>
        <CardDescription className="text-zinc-400">
          Baixe vídeos do YouTube em formato MP4 ou MP3
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url" className="text-zinc-300">URL do Vídeo</Label>
            <Input
              id="url"
              type="url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={formData.url}
              onChange={handleInputChange}
              className="w-full bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-500 focus:border-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="format" className="text-zinc-300">Formato</Label>
            <Select
              id="format"
              value={formData.format}
              onChange={handleFormatChange}
              className="bg-zinc-700 border-zinc-600 text-white focus:border-white"
            >
              <option value="mp4">MP4 (Vídeo)</option>
              <option value="mp3">MP3 (Áudio)</option>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-zinc-900 hover:bg-gray-200 transition-colors"
            disabled={downloadStatus.status === "loading"}
          >
            {downloadStatus.status === "loading" ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Processando...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Baixar {formData.format.toUpperCase()}
              </>
            )}
          </Button>

          {downloadStatus.status === "error" && (
            <div className="text-sm text-red-400 text-center">
              {downloadStatus.message}
            </div>
          )}

          {downloadStatus.status === "success" && (
            <div className="text-sm text-green-400 text-center">
              {downloadStatus.message}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
} 