export function lovefunc(flower1: number, flower2: number): boolean {
  const evenFlower = [flower1, flower2].filter((flower) => flower % 2 === 0);
  const oddFlower = [flower1, flower2].filter((flower) => flower % 2 !== 0);
  return evenFlower.length === oddFlower.length;
}
