export function countBits(n: number): number {
  const bitRepresentation = n.toString(2).split("");
  const count = bitRepresentation.filter((bit) => +bit === 1);
  return count.length;
}
