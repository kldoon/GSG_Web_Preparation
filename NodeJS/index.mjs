const x = 10;
const y = 20;
const age = 10;
let result;
try {
    // const result = calc(n1, n2);
    // console.log(result);

    // if (age < 17) {
    //     throw new Error("You are too young for university registration!!");
    // }

    result = await fetch('http://wronglink');
} catch (error) {
    console.log("An Error has occurred:", error.message);
    result = {
        name: '',
        age: 0
    };
} finally {
    console.log("This runs anyways");
}

console.log(result);

let res = (x * y) + 30;
console.log("***********************************");
for (let i = 5; i >= 0; i--) {
    console.log(res);
    console.log(i);
    res += (x / i);
}
console.log("***********************************");
// const id = prompt("Enter you id:"); //This will not work, because we don't have a window to show the prompt
// document.getElementById("abc") //This will not work, because we don't have a window or a dom