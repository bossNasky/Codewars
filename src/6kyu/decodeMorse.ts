import { MORSE_CODE } from "./preloaded";
export function decodeMorse(morseCode: string): string {
  const wordSpace = morseCode.replaceAll("   ", " space ");
  const decodedCode = wordSpace
    .split(" ")
    .map((word) => (word === "space" ? word : MORSE_CODE[word]));
  const result = decodedCode.join("").replace(/space/g, " ");
  return result;
}
