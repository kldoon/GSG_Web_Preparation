/*
for (let i = 0; i < 10; i += 2) {
  console.log("***************" + i);
}

let f = Number(prompt("enter a number"));
while (f >= 0) {
  console.log(f);
  f--;
}

let avg;
do {
  avg = prompt("Please enter an average (enter -1 to stop)");
  avg = parseFloat(avg);    //parseInt  // avg = Number(avg);

  if (avg >= 90) {
    console.log("Excellent");
  } else if (avg >= 80) {
    console.log("V.good");
  } else if (avg >= 70) {
    console.log("Good");
  } else {
    console.log("Bad :-( ");
  }

  const msg = avg >= 98 ? '**** Your are one of the best students ****' : '';
  // 'string'    152
  // ''          0
  // null        null
  // undefined   undefined

  if (msg) {
    alert(msg);
  }
} while (avg !== -1);
*/
// Sort circuit evaluation save you time and code
// style.backgroundColor = avg >= 60 ? 'Green' : 'red'
// if (avg >= 60) {
//   style.backgroundColor = 'green';
// } else {
//   style.backgroundColor = 'red';
// }

const day = prompt("Enter day name:");

let dayIndex;
switch (day.toLowerCase()) {
  case "saturday": {
    dayIndex = "first";
    break;
  }
  case "sunday": {
    dayIndex = "second";
    break;
  }
  case "monday": {
    dayIndex = "third";
    break;
  }
  case "tuesday": {
    dayIndex = "forth";
    break;
  }
  case "wednesday": {
    dayIndex = "fifth";
    break;
  }
  case "thursday": {
    dayIndex = "sixth";
    break;
  }
  case "friday": {
    dayIndex = "seventh";
    break;
  }
  default: {
    console.log("You entered a wrong name!");
  }
}

if (dayIndex) {
  console.log("This is the " + dayIndex + " day of the week!");
}


/*
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
*/