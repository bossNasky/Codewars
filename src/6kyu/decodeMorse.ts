import { MORSE_CODE } from "./preloaded";
export function decodeMorse(morseCode: string): string {
  const wordSpace = morseCode.replaceAll("   ", " ! ");
  const decodedCode = wordSpace
    .split(" ")
    .map((word) => (word === "!" ? word : MORSE_CODE[word]));
  const result = decodedCode.join("").replace(/!/g, " ");
  return result;
}
