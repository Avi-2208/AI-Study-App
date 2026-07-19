import { formatDistanceToNow, format } from 'date-fns';

export const formatDate = (date: Date | number, formatStr: string = 'MMM dd, yyyy'): string => {
  return format(new Date(date), formatStr);
};

export const formatTime = (date: Date | number): string => {
  return format(new Date(date), 'HH:mm');
};

export const formatDateTime = (date: Date | number): string => {
  return format(new Date(date), 'MMM dd, yyyy HH:mm');
};

export const formatRelativeTime = (date: Date | number): string => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const formatDuration = (milliseconds: number): string => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d`;
  if (hours > 0) return `${hours}h`;
  if (minutes > 0) return `${minutes}m`;
  return `${seconds}s`;
};

export const formatPercentage = (value: number, decimals: number = 0): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};

export const formatNumber = (value: number, decimals: number = 2): string => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });
};

export const truncateString = (str: string, length: number, suffix: string = '...'): string => {
  if (str.length <= length) return str;
  return str.substring(0, length - suffix.length) + suffix;
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const toCamelCase = (str: string): string => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  });
};
