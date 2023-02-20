export function arrayDiff(a: number[], b: number[]): number[] {
  const filterArray = a.filter((number) => !b.includes(number));
  return filterArray;
}
