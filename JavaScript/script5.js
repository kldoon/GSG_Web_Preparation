const arr1 = [1, 2, 3];

const arr2 = [-1, 0, ...arr1, 4, 5, 6, ...arr1];

// arr1.forEach((v, ind) => {
//   arr2[ind] = v
// });

arr1[0] = 1000;

console.log("arr1", arr1);
console.log("arr1 spread:", ...arr1);
console.log("arr2", arr2);

const arr3 = [{ x: 1, y: 2 }, { x: 10, y: 20 }];
const arr4 = [...arr3];  // Shallow copy of arr3

// const arr5 = JSON.parse(JSON.stringify(arr3));   // deep copy

console.log(arr3);
arr3[0].x = 1000;
arr4[1].x = 5000;
console.log(arr4);


const std = {
  name: 'Ahmad',
  age: 19,
  university: 'PPU',
  hoppies: ['swimming', 'reading', 'traveling'],
  gpa: null
};

console.log(std);
console.log(std.name);
console.log(std.age);
std.university = "AlNajah";

console.log(std["university"]);
console.log(std);
