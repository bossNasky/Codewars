const arraySlice = function <T>(arr: T[], start: number, end: number) {
  return arr.slice(start, end);
};

export function createPhoneNumber(numbers: number[]): string {
  const [first, second, third] = [
    arraySlice(numbers, 0, 3),
    arraySlice(numbers, 3, 6),
    arraySlice(numbers, 6, numbers.length),
  ];
  return `(${first.join("")}) ${second.join("")}-${third.join("")}`;
}
