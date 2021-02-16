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


const age = '      ';  
let name = 'false';
console.log(name);
if (age == false) {
    console.log('Condition is false.');
}else{
    console.log('Condition is true.');
}