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