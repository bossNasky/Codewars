export function findOutlier(integers: number[]): number {
  const even = integers.filter((integer) => integer % 2 === 0);
  const odd = integers.filter((integer) => integer % 2 !== 0);

  return even.length > odd.length ? even[0] : odd[0];
  // your code here
}
