
const student = [
    {id: 63, name: 'Nur Alom'},
    {id: 65, name: 'Mohammad Emon'},
    {id: 67, name: 'Anwar Hossain'},
    {id: 69, name: 'Faysal Ahmed'}
];

const studentName = [];

for (let i = 0; i < student.length; i++) {
    const element = student[i];
    const name = element.name;
    studentName.push(name);
}

console.log(studentName);

const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 63);
console.log(bigger);