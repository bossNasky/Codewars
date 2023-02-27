export const digitize = (n: number): number[] => {
  const digitsArray = n
    .toString()
    .split("")
    .map((digit) => Number(digit));

  const reverseDigits = digitsArray.reverse();

  return reverseDigits;
};
