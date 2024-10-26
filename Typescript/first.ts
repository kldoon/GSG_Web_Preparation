let age: number = 18;
let stdName: string;
let isGraduated: boolean = true;
let address;  // Address of type any
//any
address = 10;
address = "Hebron";
// age = "Ahmad";   // This will give an error
// isGraduated = 1;  // This will give an error
stdName = "Ahmad";

console.log("Student Info:");
console.log(stdName, age, isGraduated);

const students: string[] = ['Ahmad', 'Hiba', 'Saeed'];
const students2: any[] = ['Ahmad', 'Hiba', 21123, 214987, { name: "Saeed", No: 21684 }];

students.forEach(std => console.log(std.toUpperCase()));
students2.forEach(std => console.log(std));

const printStudent = (stdName: string, stdAge: number, isGrad: boolean) => {
  console.log(`
    ***************************************
    The student ${stdName.toUpperCase()} is ${stdAge} years old
    and he is ${isGrad ? '' : 'NOT'} graduated
    ***************************************
    `);
}

printStudent("Ahmad", 25, false);


interface Student {
  name: string;
  age: number;
  isGraduated?: boolean;  // Optional
}

const std1: Student = { name: "Sarah", age: 21, isGraduated: true };

std1.name = "Sara";

console.log(std1);

const students3: Student[] = [];
students3[0] = std1;
students3[1] = {
  name: "Jameel",
  age: 23
};

const printStudentV2 = (std: Student) => {
  console.log(`
    ***************************************
    The student ${std.name.toUpperCase()} is ${std.age} years old
    and he is ${std.isGraduated ? '' : 'NOT'} graduated
    ***************************************
    `);
}

students3.forEach(student => printStudentV2(student));