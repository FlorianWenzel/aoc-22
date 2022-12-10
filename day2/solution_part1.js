const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const rounds = input.split('\n');



let points = 0;
const pointsMap = {
   A: {
        X: 4,
        Y: 8,
        Z: 3
   },
   B: {
        X: 1,
        Y: 5,
        Z: 9
   },
   C: {
        X: 7,
        Y: 2,
        Z: 6
   }
}

rounds.forEach((round) => {
   const [opponent, myMove] = round.split(' ');
   if(!opponent || !myMove) return;
   points += pointsMap[opponent][myMove];

});
console.log(points)


