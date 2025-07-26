# 🎬 4U Video - YouTube Downloader

> **Download YouTube videos in MP4 or MP3 format quickly, securely, and for free.**

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10.0.0-red?style=flat-square&logo=nestjs)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- 🎥 **MP4 Downloads**: High-quality video files
- 🎵 **MP3 Downloads**: Extracted and converted audio
- 🎨 **Modern UI**: Dark design with ShadCN UI
- 📱 **Responsive**: Works on desktop and mobile
- ⚡ **Fast**: Direct download without storage
- 🔒 **Secure**: No registration, no personal data
- 🧹 **Smart URLs**: Automatically cleans YouTube URLs

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Static typing
- **Tailwind CSS 4** - Utility-first styling
- **ShadCN UI** - Modern components
- **Lucide React** - Icons

### Backend
- **NestJS** - Node.js framework
- **yt-dlp** - YouTube video downloader
- **FFmpeg** - Audio/video conversion
- **TypeScript** - Static typing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- yt-dlp installed globally

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/marllonramoss/4uvideo.git
cd 4uvideo
```

2. **Install yt-dlp**
```bash
# macOS
brew install yt-dlp

# Linux
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp
```

3. **Setup backend**
```bash
cd apps/backend
npm install
npm run start:dev
```

4. **Setup frontend**
```bash
cd apps/web
npm install
npm run dev
```

5. **Open the app**
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:4000`

## 📁 Project Structure

```
4uvideo/
├── apps/
│   ├── web/                 # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/         # App Router
│   │   │   ├── components/  # React components
│   │   │   ├── lib/         # Utilities
│   │   │   └── types/       # TypeScript types
│   └── backend/             # NestJS backend
│       ├── src/
│       │   ├── download.controller.ts
│       │   └── app.module.ts
└── packages/                # Shared packages
```

## 🔧 API Endpoints

### GET `/download`
Download YouTube videos in MP3 or MP4 format.

**Parameters:**
- `url` (string, required): YouTube video URL
- `format` (string, required): `mp3` or `mp4`

**Example:**
```
GET /download?url=https://youtube.com/watch?v=VIDEO_ID&format=mp3
```

### GET `/test-controller`
Health check endpoint.

**Response:**
```json
{
  "message": "DownloadController is working!",
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🎯 Technical Features

- **Smart URL Processing**: Automatically cleans YouTube URLs
- **Real-time Feedback**: Loading states and error messages
- **Direct Streaming**: No temporary file storage
- **Cross-platform**: Compatible with macOS, Linux, and Windows
- **Error Handling**: Detailed logging and clear error messages

## 🔒 Security & Privacy

- ✅ **No Registration**: No personal data collection
- ✅ **No Storage**: Files don't stay on server
- ✅ **Direct Download**: Streaming to browser
- ✅ **CORS Configured**: Secure cross-domain communication

## ⚠️ Legal Notice

This project is for **educational purposes**. Downloading YouTube videos may violate [YouTube's Terms of Service](https://www.youtube.com/t/terms) if used publicly or commercially.

**Please respect copyright and use responsibly.**

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ☕ Support

If this project helped you, consider buying me a coffee! ☕

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/marllondev)

## 📞 Contact

- **GitHub**: [@marllonramoss](https://github.com/marllonramoss)
- **LinkedIn**: [Marllon Ramos](https://www.linkedin.com/in/marllonramos/)
- **Portfolio**: [marllonramos.com](https://marllonramos.com/)

---

**Built with ❤️ by Marllon Ramos**
