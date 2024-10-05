/**** Array Looping JS ****/
const salaries = [2500, 3500, 2800, 4700, 4300, 2900];
const names = ['Ahmad', 'Saeed', 'Hiba', 'Sarah', 'Jameel', 'Waleed'];
// const employees = [names, salaries];

// for (let i = 0; i < salaries.length; i++) {
//   console.log(names[i], ": ", salaries[i]);
// }

// const printSal = (salary, index) => {
//   console.log(names[index] + ": " + salary);
// }
// salaries.forEach(printSal);

//shorter version
salaries.forEach((salary, index) => {
  console.log(names[index] + ": " + salary);
});

// ************************  Map
// Add 200 bonus for each salary using map
const addBonusIf = (salary) => {
  if (salary < 4000)
    return salary + 200;
  return salary;
}

const newSalaries = salaries.map(salary => salary + 200);
// const newSalaries = salaries.map(addBonusIf);
// shorter syntax
// const newSalaries = salaries.map(salary => salary > 4000 ? salary + 200 : salary);

console.log(newSalaries);

const totalSalaries = newSalaries.reduce((acc, current) => { return acc + current }, 0);
// const totalSalaries = newSalaries.reduce((acc, current) => acc + current, 0);
console.log(totalSalaries);


// Remove employees that have salaries more than 4000
// const filterHightSalaries = (salary) => {
//   if (salary >= 4000)
//     return false;
//   else
//     return true;
// }
// const deductedSalaries = newSalaries.filter(filterHightSalaries);

// Shorter version 
const deductedSalaries = newSalaries.filter(salary => salary < 4000);
console.log(deductedSalaries);
