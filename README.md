# 🎸 Guitar Learning App - Master Your Musical Journey

<div align="center">

![Guitar Learning App](https://img.shields.io/badge/Guitar%20Learning-App-blue?style=for-the-badge&logo=music)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite)

*A comprehensive, interactive web platform for guitar education featuring AI-powered assistance, real-time tuning, and multimedia tutorials.*

[🚀 Live Demo](https://your-app-url.vercel.app) • [📚 Documentation](./PROJECT_DOCUMENTATION.md) • [🤖 Chatbot Guide](./CHATBOT_README.md) • [🎮 Demo Guide](./DEMO_GUIDE.md)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📱 Usage](#-usage)
- [🎯 Project Highlights](#-project-highlights)
- [👥 Team](#-team)
- [🏗️ Architecture](#️-architecture)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

### 🎵 **Interactive Learning Modules**
- **Guitar Tutorials**: Comprehensive video tutorials from beginner to advanced
- **Pedal Education**: Learn about guitar effects and their applications
- **Music Theory**: Integrated lessons on chords, scales, and progressions
- **Progress Tracking**: Monitor your learning journey

### 🎛️ **Real-Time Guitar Tuner**
- **High-Precision Audio Analysis**: Autocorrelation algorithm for accurate pitch detection
- **Visual Feedback**: Real-time frequency display with cent deviation
- **Standard Tuning**: E-A-D-G-B-E configuration support
- **Reference Tones**: Built-in tone generator for tuning assistance

### 🤖 **AI-Powered Learning Assistant**
- **Google Gemini Integration**: Advanced AI chatbot for personalized guidance
- **Voice Commands**: Hands-free interaction with speech recognition
- **Context Awareness**: AI understands your current tutorial for relevant assistance
- **Text-to-Speech**: Audio responses for immersive learning

### 📱 **Modern User Experience**
- **Responsive Design**: Seamless experience across all devices
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Dark/Light Themes**: Customizable visual preferences
- **Intuitive Navigation**: Clean, musician-focused interface

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, Radix UI, Shadcn/ui |
| **Audio** | Web Audio API, MediaStream API |
| **AI** | Google Gemini 1.5 Flash |
| **State Management** | React Context, TanStack Query |
| **Build Tools** | Vite, ESLint, PostCSS |
| **Deployment** | Vercel, Netlify |

</div>

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** 8.0.0 or higher
- **Modern browser** with microphone access
- **Google Gemini API key** (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DivyanshParashar1/guitar-learning-app.git
   cd guitar-learning-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Get your free API key from [Google AI Studio](https://makersuite.google.com/app/apikey) and add it to `.env`:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:8080
   ```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📱 Usage

### 🎸 **Getting Started**
1. **Launch the app** and click "Start Learning" from the hero section
2. **Navigate between sections** using the top navigation bar
3. **Select your skill level** and choose appropriate tutorials
4. **Enable microphone access** for tuner and voice features

### 🎛️ **Using the Guitar Tuner**
1. Navigate to the **"Tuner"** section
2. Click **"Start Tuning"** to begin audio analysis
3. Play each string and observe the **frequency display**
4. Tune until the indicator shows **"In Tune"**

### 🤖 **AI Assistant Features**
1. Click the **floating purple button** to open the chatbot
2. **Type questions** or click the **microphone** for voice input
3. Ask context-specific questions while viewing tutorials
4. Use **text-to-speech** for audio responses

### 🎵 **Tutorial Navigation**
1. Browse tutorials by **difficulty level**
2. Click **"Start Tutorial"** to begin learning
3. Use the **integrated notes** feature for reference
4. **Track your progress** through the curriculum

---

## 🎯 Project Highlights

### 🏆 **Academic Excellence**
- **Multimedia Technologies** final semester project
- **Industry-standard** development practices
- **Comprehensive documentation** and testing
- **Real-world application** of web technologies

### 💡 **Innovation Points**
- **Advanced Audio Processing**: Real-time pitch detection with autocorrelation
- **AI Integration**: Context-aware learning assistance
- **Accessibility Focus**: Inclusive design for all users
- **Performance Optimization**: Efficient bundle splitting and lazy loading

### 🎓 **Learning Outcomes**
- Modern **React development** with TypeScript
- **Web Audio API** and digital signal processing
- **AI/ML integration** in web applications
- **Responsive design** and accessibility best practices
- **DevOps practices** including CI/CD and deployment

---

## 👥 Team

<div align="center">

| Developer | Role | Responsibilities | Student ID |
|-----------|------|------------------|------------|
| **Nakshatra Joshi** | Lead Developer & UI/UX Designer | Frontend development, user interface design, video integration | 23CD3025 |
| **Divyansh Parashar** | Full-Stack Developer & Project Manager | Application architecture, AI integration, deployment | 23CD3015 |
| **Rohan Singh** | Backend Developer & Audio Engineer | Audio processing, tuner functionality, performance optimization | 23CD3034 |

</div>

### 🏫 **Academic Context**
- **Course**: Multimedia Technologies (Semester 5)
- **Institution**: RGIPT (Rajiv Gandhi Institute of Petroleum Technology)
- **Academic Year**: 2024-2025
- **Project Duration**: 4 months

---

## 🏗️ Architecture

### 📁 **Project Structure**
```
guitar-learning-app/
├── 📂 public/                 # Static assets
├── 📂 src/
│   ├── 📂 components/         # React components
│   │   ├── 📂 ui/            # Reusable UI components
│   │   ├── 📂 sections/      # Feature sections
│   │   └── 📄 *.tsx          # Main components
│   ├── 📂 contexts/          # React contexts
│   ├── 📂 hooks/             # Custom hooks
│   ├── 📂 lib/               # Utilities
│   └── 📂 pages/             # Page components
├── 📄 PROJECT_DOCUMENTATION.md  # Complete documentation
├── 📄 CHATBOT_README.md         # AI integration guide
└── 📄 DEMO_GUIDE.md            # Usage demonstrations
```

### 🔧 **Key Design Patterns**
- **Component-Based Architecture**: Modular, reusable components
- **Context Pattern**: Global state management
- **Custom Hooks**: Reusable logic abstraction
- **Atomic Design**: Hierarchical component organization

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./PROJECT_DOCUMENTATION.md#contributing-guidelines) for details.

### 🔄 **Development Workflow**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 🧪 **Testing**
```bash
npm test              # Run unit tests
npm run test:e2e      # Run end-to-end tests
npm run lint          # Check code quality
```

---

## 📚 Additional Resources

- 📖 **[Complete Project Documentation](./PROJECT_DOCUMENTATION.md)** - Comprehensive technical documentation
- 🤖 **[AI Chatbot Integration Guide](./CHATBOT_README.md)** - Detailed chatbot setup and usage
- 🎮 **[Demo & Testing Guide](./DEMO_GUIDE.md)** - Step-by-step usage instructions
- 🎯 **[Deployment Guide](./PROJECT_DOCUMENTATION.md#deployment)** - Production deployment instructions

---

## 📄 License

This project is developed for academic purposes as part of the Multimedia Technologies course at RGIPT.

---

## 🙏 Acknowledgments

- **RGIPT Faculty** for guidance and support
- **Open Source Community** for the amazing tools and libraries
- **Google AI** for providing the Gemini API
- **Vercel** for hosting and deployment platform

---

<div align="center">

**Made with ❤️ by Team Guitar Learning**

*Empowering musicians through technology*

[⬆ Back to Top](#-guitar-learning-app---master-your-musical-journey)

</div>
