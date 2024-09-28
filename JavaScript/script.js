console.log("Hello from internal's code -from script.js-");

console.log('He Said\' \": "What did you do!"');
// var ~= let

let z;

let x = 10;
x = 12;
console.log("x:", x);
// x = 'Hello';   // In JS " = '
console.log("x:", x);

w = true;
console.log('w:', w);

const y = 10;
// y=12;  // You will get an error
console.log("y:", y);

const e = 2;
x++;
x--;

x += 5;   //=>   x=x+5
x -= 3;
x *= 2; //=>  x=x*2

z = x + y * 2 / (y + x) - (x + 1) % -e;
console.log("z:", z);

console.log(typeof x);
console.log(typeof (w));
console.log(typeof ("Hello"));

const str1 = "Hello";
const str2 = " World";
const str3 = "Hello Mr Browser\t,\nThis is a lecture about javascript!";
console.log(str1 + " " + str2 + "!");

console.log(str3);

console.log(str2 + 20);