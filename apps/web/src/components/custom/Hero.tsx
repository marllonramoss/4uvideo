import { DownloadForm } from "./DownloadForm";
import { Header } from "./Header";

export function Hero() {
  return (
    <>
      <Header />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              YouTube Downloader
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Baixe vídeos do YouTube de forma rápida, segura e gratuita. 
              Escolha entre MP4 (vídeo) ou MP3 (áudio).
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                100% Gratuito
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Sem Registro
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Download Rápido
              </span>
            </div>
          </div>
          
          <DownloadForm />
          
          <div className="mt-16 text-center">
            <p className="text-sm text-zinc-500 max-w-md mx-auto">
              ⚠️ Este projeto é para fins educacionais. Respeite os direitos autorais e os termos de serviço do YouTube.
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 