"use strict";

// const result = confirm("Are you here?");
// console.log(result);

console.log('arr' + " - object");

if (4 == 5) {
    console.log('Ok!');
} else {
    console.log('Error');
}


(num === 50) ? console.log('Ok!') : console.log('Error');

const num = 50;

switch (num) {
    case 49: 
    console.log('Неверно');
    break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('V tochku');
        break;
    default:
        console.log('ne v etot raz');
        break;
}


while (num < 55) {
    console.log(num);
    num++;
}

let num = 50;

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
   if (i===6) {
       continue;
   }
   console.log(i);
}


function showFirstMessage() {
    console.log("Hello World!");
}
showFirstMessage();