// Falsy value:
// false
// 0
// ""
// undefined
// null
// NaN

// Truthy value 
// true
// '0'
// ' '
// {}
// []
// 'false'


const age = '0';  
let name = 'false';
console.log(name);
if (name) {
    console.log('Condition is true.');
}else{
    console.log('Condition is false.');
}