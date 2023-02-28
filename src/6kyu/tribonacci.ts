export function tribonacci(
  [a, b, c]: [number, number, number],
  n: number
): number[] {
  const trib = [a, b, c];
  if (n < trib.length) {
    return trib.slice(0, n);
  }

  const tribLength = trib.length - 1;
  for (let i = tribLength; i <= n - tribLength; i++) {
    const nextInSequence = trib[i] + trib[i - 1] + trib[i - 2];
    trib.push(nextInSequence);
  }
  return trib;
}
