export function xo(str: string): boolean {
  const xoObject = {
    x: 0,
    o: 0,
  };

  const charArray = str.toLowerCase().split("");
  charArray.forEach((char) => {
    if (char in xoObject) {
      xoObject[char as keyof typeof xoObject]++;
    }
  });

  return xoObject.o === xoObject.x;
}
