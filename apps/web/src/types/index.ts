export interface DownloadFormData {
  url: string;
  format: 'mp3' | 'mp4';
}

export interface VideoInfo {
  title: string;
  duration: string;
  thumbnail: string;
  author: string;
}

export interface DownloadStatus {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
} 