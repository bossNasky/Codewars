export class Kata {
  static disemvowel(str: string): string {
    const vowels = ["i", "I", "o", "O", "a", "A", "u", "U", "e", "E"];
    const wordsArray = str.split(" ");
    const filteredArray = wordsArray.map((word) =>
      word
        .split("")
        .filter((char) => !vowels.includes(char))
        .join("")
    );
    return filteredArray.join(" ");
  }
}
