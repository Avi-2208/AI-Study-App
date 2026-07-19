export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: Date;
  updatedAt: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notificationsEnabled: boolean;
  language: string;
  studyReminder: boolean;
  reminderTime?: string;
}

export interface Subject {
  id: string;
  userId: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Note {
  id: string;
  userId: string;
  subjectId: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  isPinned: boolean;
  isFavorite: boolean;
}

export interface Quiz {
  id: string;
  userId: string;
  noteId?: string;
  title: string;
  questions: QuizQuestion[];
  createdAt: Date;
  updatedAt: Date;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Flashcard {
  id: string;
  userId: string;
  subjectId: string;
  front: string;
  back: string;
  difficulty: 'easy' | 'medium' | 'hard';
  reviewCount: number;
  nextReviewDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatMessage {
  id: string;
  userId: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  subjectId?: string;
}

export interface Progress {
  id: string;
  userId: string;
  subjectId: string;
  notesCount: number;
  quizzesCount: number;
  flashcardsCount: number;
  averageQuizScore: number;
  totalStudyTime: number;
  lastUpdated: Date;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  quizId: string;
  answers: Record<string, string>;
  score: number;
  totalQuestions: number;
  attemptedAt: Date;
  timeTaken: number;
}

export interface FlashcardReview {
  id: string;
  userId: string;
  flashcardId: string;
  isCorrect: boolean;
  reviewedAt: Date;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface ChatSession {
  id: string;
  userId: string;
  title: string;
  messages: ChatMessage[];
  subjectId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ErrorResponse {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export type Theme = 'light' | 'dark';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  success: string;
  warning: string;
  info: string;
}
