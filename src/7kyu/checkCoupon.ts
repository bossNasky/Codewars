export function checkCoupon(
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string
): boolean {
  if (enteredCode !== correctCode) return false;
  const current = new Date(currentDate);
  const expiration = new Date(expirationDate);

  return expiration >= current;
}
