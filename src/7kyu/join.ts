export function join(tokens: string | string[], glue?: string): string {
  if (typeof tokens === "string") {
    return tokens;
  }
  return tokens.join(glue);
}
