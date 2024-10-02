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
