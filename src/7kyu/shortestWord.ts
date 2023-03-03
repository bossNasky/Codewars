export function findShort(s: string): number {
  const wordsArray = s.split(" ");
  const mappedLengths = wordsArray.map((word) => word.length);
  const shortestWordLength = Math.min(...mappedLengths);
  return shortestWordLength;
}
