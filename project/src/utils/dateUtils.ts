import { differenceInDays, startOfDay } from 'date-fns';

export function getCurrentDate(day: number): Date {
  const baseDate = new Date('2025-01-01');
  const currentDate = new Date(baseDate);
  currentDate.setDate(baseDate.getDate() + (day - 1));
  return currentDate;
}

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function getCurrentDayFromDate(date: Date): number {
  // Force January 5th, 2025 for development
  const fixedDate = new Date('2025-01-05');
  const start = startOfDay(new Date('2025-01-01'));
  return differenceInDays(fixedDate, start) + 1;
}

export function isDateInFuture(dateStr: string, currentDay: number): boolean {
  const date = new Date(dateStr);
  const currentDate = getCurrentDate(currentDay);
  return date > currentDate;
}