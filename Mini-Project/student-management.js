// Student Data
const students = [
    { id: 1, name: "Sneh", marks: 85 },
    { id: 2, name: "Rahul", marks: 72 },
    { id: 3, name: "Priya", marks: 91 }
];

// Filter students with marks greater than 80
const topStudents = students.filter(student => student.marks > 80);

// Extract names using map
const names = topStudents.map(student => student.name);

// Calculate total marks using reduce
const totalMarks = students.reduce(
    (sum, student) => sum + student.marks,
    0
);

// Display results using template literals
console.log(`Top Students: ${names.join(", ")}`);
console.log(`Total Marks: ${totalMarks}`);

// Destructuring Example
const [firstStudent] = students;
const { name, marks } = firstStudent;

console.log(`First Student: ${name} scored ${marks}`);