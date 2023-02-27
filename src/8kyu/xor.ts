export const xor = (a: boolean, b: boolean): boolean => {
  return [a, b].filter((bool) => bool === true).length === 1;
};
