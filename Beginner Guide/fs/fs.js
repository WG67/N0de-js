const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./Begin.txt', 'utf8');
console.log(txt)

readFile('./Begin.txt', 'utf8', (err, txt) => {
    console.log(txt)
});

