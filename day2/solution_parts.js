const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const rounds = input.split('\n');



let points = 0;
const pointsMap = {
    A: {
        X: 0 + 3, // lose: pick scissors
        Y: 3 + 1, // draw: pick rock
        Z: 6 + 2 // win: pick paper
    },
    B: {
        X: 0 + 1, // lose: pick rock
        Y: 3 + 2, // draw: pick paper
        Z: 6 + 3 // win: pick scissors
    },
    C: {
        X: 0 + 2, // lose: pick paper
        Y: 3 + 3, // draw: pick scissors
        Z: 6 + 1 // win: pick rock
    }
}

rounds.forEach((round) => {
    const [opponent, myMove] = round.split(' ');
    if(!opponent || !myMove) return;
    points += pointsMap[opponent][myMove];

});
console.log(points)


