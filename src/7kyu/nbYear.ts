export const nbYear = (
  p0: number,
  percent: number,
  aug: number,
  p: number
): number => {
  let beginPopulation = Math.trunc(p0 + p0 * (percent / 100) + aug);
  let years = 1;
  while (beginPopulation < p) {
    years++;
    beginPopulation = Math.trunc(
      beginPopulation + beginPopulation * (percent / 100) + aug
    );
  }

  return years;
};
