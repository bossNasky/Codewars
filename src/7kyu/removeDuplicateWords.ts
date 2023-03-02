export function removeDuplicateWords(s: string): string {
  const wordsArray = s.split(" ");
  const removeDuplicate = [...new Set(wordsArray)];
  return removeDuplicate.join("");
}
