const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const elves = input.split('\n\n');

let caloriesPerElf = [];
elves.forEach(elf => {
    const calories = elf.split('\n').reduce((total, currentValue) => total + +currentValue, 0);
    caloriesPerElf.push(calories);
})
caloriesPerElf = caloriesPerElf.sort((a, b) => b - a);
const [a,b,c] = caloriesPerElf;
console.log(a + b + c);
