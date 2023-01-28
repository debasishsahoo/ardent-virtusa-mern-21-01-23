//Array Destructuring

const Stack = ['React', '.NET', 'JSP', 'pySpark', 'Hadoop']

//old Way
// const js = Stack[0];
// const C_Sharp = Stack[1];
// const java = Stack[2];
// const Py = Stack[3];
// const BigData = Stack[4];

//New Tech
const [js, C_Sharp, java, Py, BigData] = Stack;

function calculation(a, b) {
    const add = a + b;
    const sub = a - b;
    const mul = a * b;
    const div = a / b;

    return [add, sub, mul, div];
}

const [add, sub, mul, div] = calculation(4, 7);

console.log('div:', div)

console.log('mul:', mul)

console.log('sub:', sub)

console.log('add:', add)


//Object Destructuring
//old tech
const StudentObj = {
    name: 'Debasish Sahoo',
    dept: 'CSE',
    roll: 12
}

const details = (ArgsObj) => {
    return `My Name is ${ArgsObj.name} and i am student of ${ArgsObj.dept},my Roll no is ${ArgsObj.roll}`

}

console.log(details(StudentObj));

const info = ({ name, dept, roll }) => {
    return `My Name is ${name} and i am student of ${dept},my Roll no is ${roll}`
}

console.log(info(StudentObj));




const Stu = {
    name: 'Debasish Sahoo',
    clg: 'JU',
    dept: 'CSE',
    roll: 12,
    marks: {
        sem1: 'A',
        sem2: 'B+',
        sem3: 'A+',
        sem4: 'AA',
        sem5: 'A+',
        sem6: 'B+',
        sem7: 'A',
        sem8: 'A+',
    }
}

const result = ({ clg, roll, marks: { sem4 } }) => {
    return `Clg:${clg},r:${roll},and m:${sem4}`;

}

console.log(result(Stu))