export function number(busStops: [number, number][]): number {
  const reducedPeople = busStops.map(
    ([peopleIn, peopleOut]) => peopleIn - peopleOut
  );

  const peopleInTheBus = reducedPeople.reduce((acc, next) => (acc += next), 0);

  return peopleInTheBus;
}
