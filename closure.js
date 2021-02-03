

function stopWatch() {
    let number = 0;
    return function () {
        number++;
        return number;
    }
}

const watch1 = stopWatch();
const watch2 = stopWatch();

console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());

console.log(watch2());
console.log(watch2());
console.log(watch2());

console.log(watch1());
console.log(watch2());
