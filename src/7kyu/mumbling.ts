export function accum(s: string): string {
  const loweredCaseArray = s.toLowerCase().split("");
  const mumbling = loweredCaseArray.map(
    (char, i) => `${char.toUpperCase()}${char.toLowerCase().repeat(i)}`
  );
  return mumbling.join("-");
}
