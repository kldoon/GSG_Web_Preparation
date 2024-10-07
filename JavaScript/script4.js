const mark = 90;
const stdName = "Ahmad";
const gender = 'm';

// Whe have a good student his name is ahmad and he got 90
const msg = "We have a good student " + (gender === 'm' ? 'his' : 'her') + " name is "
  + stdName + " and " + (gender === 'm' ? 'he' : 'she') + " got " + mark;

const msg2 = `Whe have a good
student ${gender === 'm' ? 'his' : 'her'} 
name is ${stdName} and ${gender === 'm' ? 'he' : 'she'} got ${mark}`;

console.log(msg);
console.log(msg2);