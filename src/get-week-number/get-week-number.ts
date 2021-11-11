/**
 * Calculates current week number for the specified date
 * @param date target date to get week numbers
 * @returns date week number
 */
export function getWeekNumber(date?: Date | number | string | null): number {
  let currentDate = date || new Date();

  if (!(currentDate instanceof Date)) {
    currentDate = new Date(currentDate);
  }

  const d = new Date(
    Date.UTC(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
    ),
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}
