export function triangle(row: string): string {
  const result = [];
  let letters = row;

  while (letters.length > 1) {
    let str = "";
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === undefined || letters[i + 1] === undefined) break;
      const [first, second] = [letters[i], letters[i + 1]].map(
        (char) => char.charCodeAt(0) - 96
      );
      const sum = first + second > 26 ? first + second - 26 : first + second;
      str += String.fromCharCode(96 + sum);
    }
    result.push(str);
    letters = str;
    str = "";
  }

  return result.at(-1) ?? row;
}
