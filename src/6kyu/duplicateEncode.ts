export function duplicateEncode(word: string) {
  const lowerCaseWord = word.toLowerCase();
  const encoder = lowerCaseWord
    .split("")
    .map((char) =>
      lowerCaseWord.indexOf(char) === lowerCaseWord.lastIndexOf(char)
        ? "("
        : ")"
    );
  return encoder.join("");
}
