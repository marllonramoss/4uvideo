import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Limpa URLs do YouTube, extraindo apenas o ID do vídeo
 * Remove parâmetros como &list=, &start_radio=, &t=, etc.
 */
export function cleanYouTubeUrl(url: string): string {
  try {
    // Padrões para diferentes formatos de URL do YouTube
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return `https://www.youtube.com/watch?v=${match[1]}`;
      }
    }

    // Se não conseguir extrair, retorna a URL original
    return url;
  } catch (error) {
    console.error('Erro ao limpar URL do YouTube:', error);
    return url;
  }
}

/**
 * Valida se uma URL é do YouTube
 */
export function isValidYouTubeUrl(url: string): boolean {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
  return youtubeRegex.test(url);
} 