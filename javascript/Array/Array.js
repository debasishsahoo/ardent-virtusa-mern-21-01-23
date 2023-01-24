let emptyArray = [];   //js Array Empty

//Array using Constructor Method

let Students = new Array(3);//Creating an Array with initial size of 3

let Marks = new Array(1, 2, 3);//Creating an Array with three Number 1,2,3.

let Company = new Array('Virtusa'); //Creating an Array with 1 Element.


//Normal Method

let FRONTEND = ['REACT', 'ANGULAR', 'VUE', 'SAVLET', 'NEXT', 'NUXT']


let BACKEND = ['EXPRESS', 'DENO',]


console.log('FRONTEND:', FRONTEND)

//Getting the Value using index
console.log('FRONTEND:', FRONTEND[0])
console.log('FRONTEND:', FRONTEND[3])
console.log('FRONTEND:', FRONTEND[2])
console.log('FRONTEND:', FRONTEND[5])


//Change Data useing index 
FRONTEND[2] = 'VUEJS'

console.log('FRONTEND:', FRONTEND[2])

console.log('FRONTEND:', FRONTEND)