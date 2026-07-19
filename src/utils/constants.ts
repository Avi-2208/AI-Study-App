export const SUBJECT_ICONS = [
  '📚', // Books
  '🔬', // Science
  '📐', // Math
  '🌍', // Geography
  '🎨', // Art
  '🏛️', // History
  '💻', // Computer Science
  '🎵', // Music
  '🏃', // Sports
  '✍️', // Writing
] as const;

export const DIFFICULTY_LEVELS = {
  easy: { label: 'Easy', color: '#10b981', value: 1 },
  medium: { label: 'Medium', color: '#f59e0b', value: 2 },
  hard: { label: 'Hard', color: '#ef4444', value: 3 },
} as const;

export const STUDY_TIPS = [
  'Break your study sessions into 25-minute intervals',
  'Review new material within 24 hours',
  'Use active recall to test your knowledge',
  'Create a study schedule and stick to it',
  'Teach the material to someone else',
  'Use flashcards for memorization',
  'Take regular breaks to avoid burnout',
  'Study in a quiet, distraction-free environment',
];

export const LOADING_MESSAGES = [
  'Loading your studies...',
  'Preparing your materials...',
  'Gathering your notes...',
  'Setting up your session...',
  'Almost there...',
];
