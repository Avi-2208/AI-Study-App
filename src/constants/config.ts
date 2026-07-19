export const APP_CONFIG = {
  APP_NAME: 'AI Study App',
  APP_VERSION: '1.0.0',
  API_TIMEOUT: 30000,
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
  MAX_RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
} as const;

export const GEMINI_CONFIG = {
  MODEL: 'gemini-pro',
  MAX_TOKENS: 2048,
  TEMPERATURE: 0.7,
} as const;

export const FIRESTORE_COLLECTIONS = {
  USERS: 'users',
  SUBJECTS: 'subjects',
  NOTES: 'notes',
  QUIZZES: 'quizzes',
  FLASHCARDS: 'flashcards',
  CHAT_SESSIONS: 'chatSessions',
  QUIZ_ATTEMPTS: 'quizAttempts',
  FLASHCARD_REVIEWS: 'flashcardReviews',
  PROGRESS: 'progress',
} as const;
