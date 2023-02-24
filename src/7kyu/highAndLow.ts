export class Kata {
  static highAndLow(numbers: string): string {
    const digits = numbers.split(" ").map((digit) => Number(digit));
    return `${Math.max(...digits)} ${Math.min(...digits)}`;
  }
}
