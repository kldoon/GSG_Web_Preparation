const arr = ['Jerusalem', 'Hebron', 'Gaza', 'Nablus', 'Jenin'];

// const firstValue = arr[0];
// const secondValue = arr[1];
// const rest = arr.slice(2, arr.length);

// Shorter version (using destructing)
const [firstValue, secondValue, ...rest] = arr;

console.log(firstValue);
console.log(secondValue);
console.log(rest);


const std = {
  name: 'Ahmad',
  age: 19,
  university: 'PPU',
  hoppies: ['swimming', 'reading', 'traveling'],
  gpa: null
};


const { name: stdName, hoppies, lastName = 'none', ...restValues } = std;
// name: stdName   =>  is an alias
console.log(stdName);
console.log(hoppies);
console.log(restValues);

// Destructing while receiving the parameter object
const printStd = ({ name, age }) => {
  console.log(`${name} is ${age} years old`);
}

printStd(std);