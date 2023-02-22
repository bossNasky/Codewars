export function positiveSum(arr: number[]): number {
  return arr
    .filter((number) => number > 0)
    .reduce((acc, next) => (acc += next), 0);
}
