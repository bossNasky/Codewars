export function oddOrEven(array: number[]) {
  const reducedArray = array.reduce((acc, next) => (acc += next), 0);
  return reducedArray % 2 === 0 ? "even" : "odd";
}
