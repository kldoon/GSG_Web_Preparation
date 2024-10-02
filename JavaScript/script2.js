

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

const calcAvg = (m1, m2, m3, isPassFunc) => {
    const avg = (m1 + m2 + m3) / 3;
    const is_pass = isPassFunc(avg);
    console.log("Average is: " + avg + " and did the student pass: " + is_pass);
};

// University student
calcAvg(90, 70, 60, isPassVS);

// School student
calcAvg(65, 50, 57, isPass);