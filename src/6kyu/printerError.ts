export function printerError(s: string): string {
  const printerLength = s.length;
  const printerErrors = s
    .split("")
    .filter((error) => error.charCodeAt(0) < 97 || error.charCodeAt(0) > 109);
  return `${printerErrors.length}/${printerLength}`;
}
