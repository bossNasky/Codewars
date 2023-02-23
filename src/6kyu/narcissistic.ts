export function narcissistic(value: number): boolean {
  const digitsArray = value
    .toString()
    .split("")
    .map((digit) => Number(digit));

  const reducedDigits = digitsArray.reduce(
    (acc, next) => (acc += next ** digitsArray.length),
    0
  );

  return reducedDigits === value;
}
