export const centuryFromYear = (year: number): number => {
  const century = Math.floor(year / 100);

  return year % 100 > 0 ? century + 1 : century;
};
