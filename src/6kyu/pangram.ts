type Letters = {
  [key: string]: number;
};

export const isPangram = (phrase: string): boolean => {
  const loweredCase = phrase.toLowerCase();
  const charArrays = loweredCase.split("").filter((char) => char !== " ");
  const letters: Letters = {};

  charArrays.forEach((char) => {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      letters[char] = 1;
    }
  });

  return Object.keys(letters).length === 26;
};
