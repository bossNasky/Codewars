export function humanReadable(seconds: number): string {
  const hours = Math.trunc(seconds / 3600)
    .toString()
    .padStart(2, "0");

  const minutes = Math.trunc((seconds / 60) % 60)
    .toString()
    .padStart(2, "0");

  const second = Math.trunc(seconds % 60)
    .toString()
    .padStart(2, "0");

  const humanTime = `${hours}:${minutes}:${second}`;

  return humanTime;
}
