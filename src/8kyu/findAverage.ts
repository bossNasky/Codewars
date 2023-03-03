export function findAverage(array: number[]): number {
  // your code here
  if (!array.length) return 0;
  return array.reduce((acc, next) => (acc += next), 0) / array.length;
}
