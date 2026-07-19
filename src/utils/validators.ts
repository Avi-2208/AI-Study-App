import { AppError, ERROR_CODES } from './errors';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

export const validateNotEmpty = (value: string, fieldName: string): void => {
  if (!value || value.trim().length === 0) {
    throw new AppError(
      ERROR_CODES.VALIDATION_ERROR,
      `${fieldName} is required`
    );
  }
};

export const validateSignUp = (email: string, password: string, name: string): void => {
  if (!email || !password || !name) {
    throw new AppError(ERROR_CODES.VALIDATION_ERROR, 'All fields are required');
  }

  if (!validateEmail(email)) {
    throw new AppError(ERROR_CODES.AUTH_INVALID_EMAIL, 'Invalid email address');
  }

  if (!validatePassword(password)) {
    throw new AppError(ERROR_CODES.AUTH_WEAK_PASSWORD, 'Password must be at least 6 characters');
  }

  if (!validateName(name)) {
    throw new AppError(ERROR_CODES.VALIDATION_ERROR, 'Name must be between 2 and 50 characters');
  }
};

export const validateLogin = (email: string, password: string): void => {
  if (!email || !password) {
    throw new AppError(ERROR_CODES.VALIDATION_ERROR, 'Email and password are required');
  }

  if (!validateEmail(email)) {
    throw new AppError(ERROR_CODES.AUTH_INVALID_EMAIL, 'Invalid email address');
  }
};
