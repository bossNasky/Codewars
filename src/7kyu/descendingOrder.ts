export function descendingOrder(n: number): number {
  const digitArray = n
    .toString()
    .split("")
    .map((digit) => Number(digit));
  const sortedArray = digitArray.sort((a, b) => (b -= a));

  return Number(sortedArray.join(""));
}
