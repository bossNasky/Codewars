export function wave(str: string): Array<string> {
  const charArray = str.split("");
  const fillArray = new Array(charArray.length).fill("");
  const mexicanWave: string[] = fillArray.map((_, i) => {
    if (charArray[i] === " ") {
      return "";
    }
    return charArray
      .map((char, id) => (id === i ? char.toUpperCase() : char))
      .join("");
  });
  return mexicanWave.filter((wave) => wave !== "");
}
