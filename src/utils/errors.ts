import { ErrorResponse } from '@types/index';

export class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public details?: Record<string, any>
  ) {
    super(message);
    this.name = 'AppError';
  }

  toResponse(): ErrorResponse {
    return {
      code: this.code,
      message: this.message,
      details: this.details,
    };
  }
}

export const ERROR_CODES = {
  // Auth errors
  AUTH_INVALID_EMAIL: 'AUTH_INVALID_EMAIL',
  AUTH_WEAK_PASSWORD: 'AUTH_WEAK_PASSWORD',
  AUTH_EMAIL_EXISTS: 'AUTH_EMAIL_EXISTS',
  AUTH_INVALID_CREDENTIALS: 'AUTH_INVALID_CREDENTIALS',
  AUTH_TOO_MANY_ATTEMPTS: 'AUTH_TOO_MANY_ATTEMPTS',
  AUTH_SESSION_EXPIRED: 'AUTH_SESSION_EXPIRED',

  // Network errors
  NETWORK_ERROR: 'NETWORK_ERROR',
  NETWORK_TIMEOUT: 'NETWORK_TIMEOUT',

  // Database errors
  DB_NOT_FOUND: 'DB_NOT_FOUND',
  DB_WRITE_FAILED: 'DB_WRITE_FAILED',
  DB_READ_FAILED: 'DB_READ_FAILED',

  // API errors
  API_ERROR: 'API_ERROR',
  API_RATE_LIMIT: 'API_RATE_LIMIT',

  // Validation errors
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INVALID_INPUT: 'INVALID_INPUT',

  // General errors
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
} as const;

export const getErrorMessage = (code: string): string => {
  const messages: Record<string, string> = {
    [ERROR_CODES.AUTH_INVALID_EMAIL]: 'Please enter a valid email address',
    [ERROR_CODES.AUTH_WEAK_PASSWORD]: 'Password must be at least 6 characters',
    [ERROR_CODES.AUTH_EMAIL_EXISTS]: 'This email is already registered',
    [ERROR_CODES.AUTH_INVALID_CREDENTIALS]: 'Invalid email or password',
    [ERROR_CODES.AUTH_TOO_MANY_ATTEMPTS]: 'Too many login attempts. Please try again later',
    [ERROR_CODES.AUTH_SESSION_EXPIRED]: 'Your session has expired. Please log in again',
    [ERROR_CODES.NETWORK_ERROR]: 'Network error. Please check your connection',
    [ERROR_CODES.NETWORK_TIMEOUT]: 'Request timeout. Please try again',
    [ERROR_CODES.DB_NOT_FOUND]: 'Data not found',
    [ERROR_CODES.DB_WRITE_FAILED]: 'Failed to save data',
    [ERROR_CODES.DB_READ_FAILED]: 'Failed to load data',
    [ERROR_CODES.API_ERROR]: 'API error. Please try again',
    [ERROR_CODES.API_RATE_LIMIT]: 'Too many requests. Please wait',
    [ERROR_CODES.VALIDATION_ERROR]: 'Please check your input',
    [ERROR_CODES.INVALID_INPUT]: 'Invalid input provided',
    [ERROR_CODES.UNKNOWN_ERROR]: 'Something went wrong. Please try again',
  };

  return messages[code] || 'An error occurred';
};

export const handleFirebaseError = (error: any): AppError => {
  if (error.code === 'auth/invalid-email') {
    return new AppError(ERROR_CODES.AUTH_INVALID_EMAIL, 'Invalid email address');
  }
  if (error.code === 'auth/weak-password') {
    return new AppError(ERROR_CODES.AUTH_WEAK_PASSWORD, 'Password is too weak');
  }
  if (error.code === 'auth/email-already-in-use') {
    return new AppError(ERROR_CODES.AUTH_EMAIL_EXISTS, 'Email already registered');
  }
  if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
    return new AppError(ERROR_CODES.AUTH_INVALID_CREDENTIALS, 'Invalid credentials');
  }
  if (error.code === 'auth/too-many-requests') {
    return new AppError(ERROR_CODES.AUTH_TOO_MANY_ATTEMPTS, 'Too many attempts');
  }
  if (error.code === 'permission-denied') {
    return new AppError(ERROR_CODES.DB_NOT_FOUND, 'Access denied');
  }
  return new AppError(ERROR_CODES.UNKNOWN_ERROR, error.message || 'Unknown error');
};
