type Digits = {
  [key: string]: number;
};

export const findOdd = (xs: number[]): number => {
  const digits: Digits = {};
  xs.forEach((digit) => {
    if (digit in digits) {
      return digits[digit]++;
    }
    return (digits[digit] = 1);
  });

  for (const [key, value] of Object.entries(digits)) {
    if (value % 2 !== 0) {
      return Number(key);
    }
  }
  return 0;
};
