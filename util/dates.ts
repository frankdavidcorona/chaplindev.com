export const calculateDateDiff = (start: string, end: string | Date) => {
  let startDate: Date = new Date(start);
  let endDate: Date = new Date(end);

  let years: number, months: number, days: number;

  years = endDate.getFullYear() - startDate.getFullYear();
  startDate.setFullYear(startDate.getFullYear() + years);

  if (startDate > endDate) {
    years--;
    startDate.setFullYear(startDate.getFullYear() - 1);
  }

  months = endDate.getMonth() - startDate.getMonth();
  startDate.setMonth(startDate.getMonth() + months);

  if (startDate > endDate) {
    months--;
    startDate.setMonth(startDate.getMonth() - 1);
  }

  days = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

  return {
    years,
    months,
    days,
  };
};
