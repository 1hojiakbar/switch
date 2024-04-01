// switch

let num = 10;

switch (num) {
  case 10:
    console.log("Bu son 10 ga teng");
    break;
  case 15:
    console.log("Bu son 15 ga teng");
    break;
  default:
    console.log("Hech qaysi case ga to'gri kelmasa men ekranga chiqaman");
}

// ===================================================

let browser = "Firefox";

switch (browser) {
  case "Edge":
    console.log("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    console.log("Okay we support these browsers too");
    break;

  default:
    console.log("We hope that this page looks ok!");
}
