import { format, differenceInDays, parseISO, isAfter, isBefore, addDays } from 'date-fns';

export const formatDate = (date: string | Date, formatStr: string = 'MMM dd, yyyy'): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, formatStr);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};

export const calculateNights = (checkIn: string, checkOut: string): number => {
  try {
    const checkInDate = parseISO(checkIn);
    const checkOutDate = parseISO(checkOut);
    return differenceInDays(checkOutDate, checkInDate);
  } catch (error) {
    console.error('Error calculating nights:', error);
    return 0;
  }
};

export const isDateInRange = (date: string, startDate: string, endDate: string): boolean => {
  try {
    const checkDate = parseISO(date);
    const start = parseISO(startDate);
    const end = parseISO(endDate);
    return isAfter(checkDate, start) && isBefore(checkDate, end);
  } catch (error) {
    console.error('Error checking date range:', error);
    return false;
  }
};

export const getTodayString = (): string => {
  return format(new Date(), 'yyyy-MM-dd');
};

export const getTomorrowString = (): string => {
  return format(addDays(new Date(), 1), 'yyyy-MM-dd');
};