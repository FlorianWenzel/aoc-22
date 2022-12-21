const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const monkeyInputs = input.split('\n\n');
const monkeysMap = {};

class Monkey {
    count = 0;

    constructor(inputString) {
        const [lineId, lineItems, lineOperator, lineTest, lineTrue, lineFalse] = inputString.split('\n');
        this.id = +(lineId.replace('Monkey ', '').replace(':', ''))
        this.items = lineItems.trim()
            .replace('Starting items: ', '')
            .split(', ')
            .map(n => +n)

        this.operation = lineOperator.trim()
            .replaceAll('Operation: ', '')
            .replaceAll('old', 'new')
            .replaceAll('new', 'item')

        this.test = +lineTest.trim()
            .replace('Test: divisible by ', '')

        this.positive = +lineTrue.trim()
            .replace('If true: throw to monkey ', '')

        this.negative = +lineFalse.trim()
            .replace('If false: throw to monkey ', '')
    }

    doTurn() {
        console.log(this.items.length)
        this.items.forEach(item => {
            eval(this.operation);
            this.count++;
            //item = Math.floor(item / 3)
            item %= 9699690

            const receiverId = item % this.test === 0 ? this.positive : this.negative;
            monkeysMap[receiverId].items.push(item);
        })
        this.items = [];
    }
}

monkeyInputs.forEach((monkeyInput) => {
    const monkey = new Monkey(monkeyInput);
    monkeysMap[monkey.id] = monkey
})

for(let i = 0; i < 10000; i++){
    for(const monkey of Object.values(monkeysMap)) {
        monkey.doTurn();
    }
}

(Object.values(monkeysMap).map(monkey => monkey.count).forEach((count, index) => {
    console.log(`monkey ${index}: ${count}`)
}))

Object.values(monkeysMap).forEach(monkey => console.log(monkey.test))




