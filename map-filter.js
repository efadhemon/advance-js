
const numbers = [3, 4, 5, 6, 7, 8, 9];
const outPut = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    outPut.push(result);
}

function square(element){
    return element * element;
}

const result = numbers.map(function(element){
    return element * element;
});

const square = element=> element * element;
const result = numbers.map(square);

const bigger = numbers.filter(x=> x > 5)

const isThere = numbers.find(x=> x > 5)

console.log(isThere);