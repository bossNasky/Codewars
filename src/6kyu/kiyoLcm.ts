const gcd = (a: number, b: number): any => (a ? gcd(b % a, a) : b);
const lcm = (a: number, b: number) => (a * b) / gcd(a, b);

const preventEmptyArrays = (array: number[][]) => {
  return array.map((subarray) => subarray.length).includes(0);
};

export function kiyoLcm(a: any[][]): number {
  if (preventEmptyArrays(a)) return 0;

  const kiyoArray: number[] = a.map((subarray) =>
    subarray
      .filter((digit) => {
        if (Number.isInteger(+digit) && digit % 2 !== 0) {
          return digit;
        }
      })
      .reduce((acc, next) => (acc += next), 0)
  );

  const lcmResult = kiyoArray.reduce(lcm);
  console.log(lcmResult);

  return lcmResult;
}
