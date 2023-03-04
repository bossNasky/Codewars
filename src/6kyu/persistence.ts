export function persistence(num: number): number {
  if (num < 10) return 0;
  let stringNumber = num.toString();
  let steps = 0;

  while (stringNumber.length > 1) {
    const digitsPowered = stringNumber
      .split("")
      .map((digit) => Number(digit))
      .reduce((acc, next) => (acc *= next), 1);
    stringNumber = digitsPowered.toString();
    steps++;
  }

  return steps;
}
