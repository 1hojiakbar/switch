// JS

"use strict"

let user = String(prompt('Login kriting  "User" '))
console.log(user);
alert('Tabriklaymiz siz tizmga oddiy user bolib kirdingiz')


let admin = String(prompt("Login kriting  'Admin' "))
console.log(admin);
alert('Tabriklaymiz siz tizmga "Admin" bolib kirdingiz')


const nam = Number(prompt("Hisobni kiriting"));
let sum;

if ( nam>50 && nam < 300) {
      sum=nam*15/100 
} else if (nam<50 && nam>300) {
    sum = nam*20/100
} 

console.log(sum);

const number = 50;
let output;

switch (number) {
    case 50 === 300:
      output = 'bir';
      break;
    case 70:
      output = 'ikki';
      break;
    case 80:
      output = 'uch';
      break;
    default:
        output = 'topilmadi';
        break;
}
console.log(`Qiymat: ${output}`);