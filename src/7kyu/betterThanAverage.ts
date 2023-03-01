export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  const averageClassPoints =
    classPoints.reduce((acc, next) => (acc += next), 0) / classPoints.length;
  return yourPoints > averageClassPoints;
}
