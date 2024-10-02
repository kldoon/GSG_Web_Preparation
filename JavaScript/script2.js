

const result = calc(10, 5);
console.log(result);
console.log(calc(7, 3));

// es5
function calc(n1, n2) {
    const res = (n1 * n1) + n2;
    return res;
}

// es6 (arrow function)
const calc2 = (n1, n2) => {
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
const isPass = avg => avg >= 60 ? true : false;
const isPassVS = avg => avg >= 60;

console.log(calc2(8, 6));
console.log(calc3(5, 2));

console.log(isPassVS(50));
console.log(isPassVS(60));
console.log(isPass(70));