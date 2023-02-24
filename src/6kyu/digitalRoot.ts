export const digitalRoot = (n: number): number => {
  let str = n.toString();

  while (str.length > 1) {
    const reducedArray = str
      .split("")
      .map((digit) => Number(digit))
      .reduce((acc, next) => (acc += next), 0);

    str = reducedArray.toString();
  }
  console.log(str);
  return Number(str);
};
