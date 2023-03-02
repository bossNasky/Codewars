export function xo(str: string): boolean {
  const xoObject = {
    x: 0,
    o: 0,
  };

  const charArray = str.split("");
  charArray.forEach((char) => {
    if (char in xoObject) {
      console.log(xoObject);
      xoObject[char as keyof typeof xoObject]++;
    }
  });

  return xoObject.o === xoObject.x;
}
