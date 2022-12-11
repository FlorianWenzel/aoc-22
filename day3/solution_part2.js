const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const backpacks = input.split('\n');
let priorities = 0;
for(let i = 0; i < backpacks.length; i += 3) {
    const [first, second, third] = backpacks.slice(i, i + 3);

    for(const char of [...first]){
        if(second.includes(char) && third.includes(char)){
            priorities += charToPriority(char);
            break;
        }
    }
    console.log(priorities)

}

function charToPriority(char){
    const charCode = char.charCodeAt(0);
    let priority = charCode > 92 ? (charCode - 96) : ((charCode - 64) + 26);
    return priority;
}

console.log(priorities)


