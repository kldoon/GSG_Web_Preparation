const result = calc(10, 5);
console.log(result);
console.log(calc(7, 3));

// es5
function calc(n1, n2) {
    const res = (n1 * n1) + n2;
    return res;
}

// es6 (arrow function)
const calc2 = (n1, n2 = 5) => {
    const res = (n1 * n1) + n2;
    return res;
}
// shorter form
const calc3 = (n1, n2) => (n1 * n1) + n2;

// const isPass = (avg) => {
//     if (avg >= 60) {
//         return true;
//     } else {
//         return false;
//     }
// }

// shorter form
const isPass = avg => avg >= 50 ? true : false;
const isPassVS = avg => avg >= 60;

console.log(calc2(8, 6));
console.log("One param (9):" + calc2(9));
console.log(calc3(5, 2));

console.log(isPassVS(50));
console.log(isPassVS(60));
console.log(isPass(70));

const calcAvg = (marks = [], isPassFunc) => {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    const avg = sum / marks.length;
    const is_pass = isPassFunc(avg);
    console.log("Average is: " + avg + " and did the student pass: " + is_pass);
};

// Arrays
const emptyArr = [];
// const emptyArr2 = new Array(1, 2, 3, 4);    //Another way to create arrays
const marksArr1 = [90, 70, 60];
marksArr1[1] = 77;

// University student
calcAvg(marksArr1, isPassVS);

const marksArr2 = [];
marksArr2[0] = 65;
marksArr2.push(50);   // Add element to the end of the array
marksArr2.unshift(50);   // Add element to the beginning of the array


// School student
calcAvg(marksArr2, isPass);

// You can have array with multiple data types
//  [90, 70, 60, "apple", true, null];


const multiDArray = [[1, 2, 3], ['A,B,C'], [true, false], [10, 22, 30, 40, 50]];

console.log(multiDArray);
console.log(multiDArray.length)

const students = [
    ['Ahmad', 'Hiba', 'Saeed'],
    [90, 80, 70]
];

let cities = ['Jerusalem', 'Ramallah', 'Jenin', 'Nablus', 'Betlehem', 'Tulkarm', 'Qalqilia', 'Jericho'];
const cities2 = cities;  // This will not create another array, it only will create another pointer to the same array
// const cities3 = [...cities];  // This will create a new array and copy all items from the first array
const cities3=[...cities];

cities.push('Hebron');
cities.unshift('Gaza');
console.log(cities.toString());
console.log(cities2.toString());
console.log(cities3.toString());

const city1 = cities.shift();   // remove and return the first element of array
const city2 = cities.pop();   // remove and return the last element of array
// const city3 = cities[cities.length - 1];   // alternative solution, without deletion
// delete cities[cities.length - 1];

console.log(city1);
console.log(city2);
console.log('*************************');

console.log(cities.toString());
// console.log(city3);
cities.splice(1, 2, 'Tubas');

console.log(cities.toString());

const newCities = cities.slice(2, 5);    // Return from the third element to fifth element
console.log("New Cities: ", newCities.toString());
console.log(cities.toString());

const otherCities = ['Haifa', 'Yaffa', 'Beershiva'];
cities = cities.concat(otherCities);
console.log(cities.toString());
