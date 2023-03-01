export function getSum(a: number, b: number): number {
  const [begin, end] = [a, b].sort((a, b) => (a -= b));
  let sum = 0;
  for (let i = begin; i <= end; i++) {
    sum += i;
  }
  return sum;
}
