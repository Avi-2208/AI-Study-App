# AI Study App

An intelligent, AI-powered study application built with React Native, Expo, TypeScript, and Firebase. This app helps students learn more effectively through personalized content, AI tutoring, quiz generation, and flashcards.

## 🚀 Features

- **Authentication**: Secure Firebase authentication with email/password and social login
- **Dashboard**: Personalized home screen with study progress and quick actions
- **AI Chat Tutor**: Real-time AI-powered tutoring using Google Gemini API
- **Subject Management**: Organize and manage different subjects and topics
- **Smart Notes**: Create and organize study notes with markdown support
- **Quiz Generator**: AI-powered quiz generation from your notes
- **Flashcards**: Interactive flashcard system for spaced repetition learning
- **Progress Tracking**: Detailed analytics and learning progress visualization
- **Profile Management**: User profile and customization options
- **Settings**: Comprehensive settings including dark/light mode, notifications
- **Responsive UI**: Fully responsive design optimized for mobile and tablet
- **Dark/Light Mode**: Complete theme support with system preference detection

## 🛠 Tech Stack

- **Frontend**: React Native + Expo
- **Language**: TypeScript
- **State Management**: Zustand
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **AI**: Google Gemini API
- **Navigation**: React Navigation
- **Storage**: Async Storage + Secure Store
- **UI Components**: Custom components with native styling

## 📁 Project Structure

```
ai-study-app/
├── src/
│   ├── components/           # Reusable UI components
│   ├── screens/             # Screen components
│   ├── services/            # External services
│   ├── stores/              # Zustand stores
│   ├── utils/               # Utility functions
│   ├── constants/           # App constants
│   ├── types/               # TypeScript types
│   ├── hooks/               # Custom React hooks
│   └── navigation/          # Navigation configuration
├── assets/                  # Images, fonts, icons
├── App.tsx                  # App entry point
└── index.ts                 # Root file
```

## 📱 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Expo CLI
- Firebase project
- Google Gemini API key

### Installation

```bash
npm install
cp .env.example .env
# Add your Firebase and Gemini credentials
npm start
```

## 🚀 Deployment

```bash
eas build --platform android
eas build --platform ios
```

## 📄 License

MIT License - see LICENSE file for details
