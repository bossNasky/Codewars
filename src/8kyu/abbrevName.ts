export function abbrevName(name: string): string {
  // code away
  return name
    .split(" ")
    .map((personal) => personal[0].toUpperCase())
    .join(".");
}
