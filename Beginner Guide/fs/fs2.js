const { readFile } = require('fs').promises;

const file = await readFile('./Begin.txt', 'utf8');