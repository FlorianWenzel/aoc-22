const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const backpacks = input.split('\n');
let priorities = 0;
backpacks.forEach((backpack) => {
    if(!backpack) return;

    const length = backpack.length;
    const half = Math.floor(length / 2);

    const firstHalf = backpack.slice(0, half);
    const secondHalf = backpack.slice(half, length);

    let duplicateChar = null;
    for(const char of [...firstHalf]){
      if(secondHalf.includes(char)){
          duplicateChar = char;
          break;
      }
    }
    if(!duplicateChar)
        console.log('no duplicate found for', backpack);

    const charCode = duplicateChar.charCodeAt(0);
    let priority = charCode > 92 ? (charCode - 96) : ((charCode - 64) + 26);
    console.log(duplicateChar, charCode, priority)

    console.log(duplicateChar, priority)
    priorities += priority;
})

console.log(priorities)


