export function intersect<T extends Object, U extends Object>(
  first: T,
  second: U
): T & U {
  let result = <any>{};
  for (const key in first) {
    if (key in second) {
      result[key] = first[key];
    }
  }
  return result;
}
