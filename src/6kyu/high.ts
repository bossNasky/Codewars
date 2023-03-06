const A_ASCI_CODE = 97;

export const high = (str: string): string => {
  const wordsArray = str.split(" ");
  const mappedScorsArray = wordsArray.map((word) =>
    word
      .split("")
      .map((char) => char.charCodeAt(0) - A_ASCI_CODE + 1)
      .reduce((acc, next) => (acc += next), 0)
  );
  const maximumOfArray = Math.max(...mappedScorsArray);
  const index = mappedScorsArray.indexOf(maximumOfArray);
  return wordsArray[index]
};
