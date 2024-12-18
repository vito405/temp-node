const { readFileSync, writeFileSync } = require('fs')
console.log('start')
//read and I geuss copy what it is the files
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

//then write and create a new file with the result of first nad second
writeFileSync('./content/result-sync.txt',
     `Here is the : ${first}, ${second}`,
     //kidda dubplactes the result 
    { flag: 'a'}
)
console.log('done with this task')
console.log('Starting the next one')