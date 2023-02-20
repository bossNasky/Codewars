export function solution(str: string): string {
  // 1. Using a for loop.
  // 2. Using a array methods.

  // I'm using 2.

  const arrayOfChar = str.split("");
  const reversedArray = arrayOfChar.reverse();

  return reversedArray.join("");
}
