export function switchItUp(intNumber: number): string {
  let switchedValue = "";
  switch (intNumber) {
    case 0:
      switchedValue = "Zero";
      break;
    case 1:
      switchedValue = "One";
      break;
    case 2:
      switchedValue = "Two";
      break;
    case 3:
      switchedValue = "Three";
      break;
    case 4:
      switchedValue = "Four";
      break;
    case 5:
      switchedValue = "Five";
      break;
    case 6:
      switchedValue = "Six";
      break;
    case 7:
      switchedValue = "Seven";
      break;
    case 8:
      switchedValue = "Eight";
      break;
    case 9:
      switchedValue = "Nine";
      break;
  }

  return switchedValue;
}
