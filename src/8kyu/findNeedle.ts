export function findNeedle(haystack: any[]): string {
  const indexNeedle = haystack.findIndex((el) => el === "needle");
  return `found the needle at position ${indexNeedle}`;
}
