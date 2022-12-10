const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const elves = input.split('\n\n');

let max = 0;
elves.forEach(elf => {
    const calories = elf.split('\n').reduce((total, currentValue) => total + +currentValue, 0);
    if (calories > max) {
        max = calories;
    }
})
console.log(max)
