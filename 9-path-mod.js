const path = require('path');

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)
//return the file path of all of these above

const base = path.basename(filePath)
console.log(base)
//return the base filepath if you just want the end

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)
//get the absolute path ie the full file name all the way to text.txt