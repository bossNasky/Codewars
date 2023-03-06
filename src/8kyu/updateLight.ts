export function updateLight(current: string): string {
  const trafficLight = Object.freeze({
    red: "green",
    green: "yellow",
    yellow: "red",
  });
  return trafficLight[current as keyof typeof trafficLight];
}
