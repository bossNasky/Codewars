export function areYouPlayingBanjo(name: string): string {
  const firstLetter = name[0];
  return `${name} ${
    firstLetter === "R" || firstLetter === "r" ? "plays" : "does not play"
  } banjo`;
}
