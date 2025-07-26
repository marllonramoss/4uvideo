# 🎬 4U Video - YouTube Downloader

> **Download vídeos do YouTube em formato MP4 ou MP3 de forma rápida, segura e gratuita.**

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10.0.0-red?style=flat-square&logo=nestjs)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- 🎥 **Download MP4**: Vídeos em alta qualidade
- 🎵 **Download MP3**: Áudio extraído e convertido
- 🎨 **Interface Moderna**: Design dark com ShadCN UI
- 📱 **Responsivo**: Funciona em desktop e mobile
- ⚡ **Rápido**: Download direto sem armazenamento
- 🔒 **Seguro**: Sem registro, sem dados pessoais
- 🧹 **URL Inteligente**: Limpa automaticamente URLs do YouTube

## 🛠️ Tecnologias

### Frontend
- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização utilitária
- **ShadCN UI** - Componentes modernos
- **Lucide React** - Ícones

### Backend
- **NestJS** - Framework Node.js
- **yt-dlp** - Download de vídeos do YouTube
- **FFmpeg** - Conversão de áudio/vídeo
- **TypeScript** - Tipagem estática

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- yt-dlp instalado globalmente

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/4uvideo.git
cd 4uvideo
```

### 2. Instale o yt-dlp
```bash
# macOS
brew install yt-dlp

# Linux
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp

# Windows
# Baixe de https://github.com/yt-dlp/yt-dlp/releases
```

### 3. Configure o backend
```bash
cd apps/backend
npm install
```

### 4. Configure o frontend
```bash
cd apps/web
npm install
```

## 🏃‍♂️ Como usar

### 1. Inicie o backend
```bash
cd apps/backend
npm run start:dev
```
O backend estará disponível em `http://localhost:4000`

### 2. Inicie o frontend
```bash
cd apps/web
npm run dev
```
O frontend estará disponível em `http://localhost:3000`

### 3. Use a aplicação
1. Acesse `http://localhost:3000`
2. Cole uma URL do YouTube
3. Escolha o formato (MP3 ou MP4)
4. Clique em "Baixar"
5. O download começará automaticamente

## 📁 Estrutura do Projeto

```
4uvideo/
├── apps/
│   ├── web/                 # Frontend Next.js
│   │   ├── src/
│   │   │   ├── app/         # App Router
│   │   │   ├── components/  # Componentes React
│   │   │   │   ├── ui/      # Componentes ShadCN
│   │   │   │   └── custom/  # Componentes personalizados
│   │   │   ├── lib/         # Utilitários
│   │   │   └── types/       # Tipos TypeScript
│   │   └── public/          # Arquivos estáticos
│   └── backend/             # Backend NestJS
│       ├── src/
│       │   ├── download.controller.ts  # Endpoint de download
│       │   ├── app.controller.ts       # Controller principal
│       │   └── app.module.ts           # Módulo principal
│       └── package.json
├── packages/                # Pacotes compartilhados
│   ├── ui/                  # Componentes UI
│   ├── eslint-config/       # Configuração ESLint
│   └── typescript-config/   # Configuração TypeScript
└── README.md
```

## 🔧 API Endpoints

### GET `/download`
Baixa vídeos do YouTube em MP3 ou MP4.

**Parâmetros:**
- `url` (string, obrigatório): URL do vídeo do YouTube
- `format` (string, obrigatório): `mp3` ou `mp4`

**Exemplo:**
```
GET /download?url=https://youtube.com/watch?v=VIDEO_ID&format=mp3
```

**Resposta:**
- Arquivo MP3/MP4 para download
- Headers: `Content-Disposition`, `Content-Type`

### GET `/test-controller`
Testa se o controller está funcionando.

**Resposta:**
```json
{
  "message": "DownloadController está funcionando!",
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🎯 Features Técnicas

### Frontend
- **Validação de URLs**: Limpa automaticamente URLs do YouTube
- **Feedback em tempo real**: Loading states e mensagens de erro
- **Download automático**: Inicia download sem intervenção manual
- **Design responsivo**: Funciona em todos os dispositivos

### Backend
- **Pipeline otimizado**: yt-dlp + FFmpeg para máxima compatibilidade
- **Streaming direto**: Sem armazenamento de arquivos temporários
- **Tratamento de erros**: Logs detalhados e mensagens claras
- **CORS configurado**: Comunicação segura entre frontend e backend

## 🔒 Segurança e Privacidade

- ✅ **Sem registro**: Não coletamos dados pessoais
- ✅ **Sem armazenamento**: Arquivos não ficam no servidor
- ✅ **Download direto**: Streaming direto para o navegador
- ✅ **CORS configurado**: Comunicação segura entre domínios

## ⚠️ Aviso Legal

Este projeto é para **fins educacionais**. Baixar vídeos do YouTube pode violar os [Termos de Serviço da plataforma](https://www.youtube.com/t/terms) se for utilizado de forma pública ou comercial.

**Respeite os direitos autorais e use com responsabilidade.**

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ☕ Suporte

Se este projeto te ajudou, considere me pagar um café! ☕

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/marllondev)

## 📞 Contato

- **GitHub**: [@seu-usuario](https://github.com/seu-usuario)
- **Email**: seu-email@exemplo.com

---

**Desenvolvido com ❤️ por [Seu Nome]**
