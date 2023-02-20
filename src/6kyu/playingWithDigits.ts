export class G964 {
  public static digPow = (n: number, p: number) => {
    const digits = n
      .toString()
      .split("")
      .map((number) => Number(number));

    const powedDigits = digits.map((digit, index) => digit ** (p + index));

    const reducedArray = powedDigits.reduce((acc, next) => (acc += next), 0);

    const integerK = reducedArray / n;

    return Number.isInteger(integerK) ? integerK : -1;
  };
}
