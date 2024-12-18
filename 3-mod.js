//node file name
// _dirname - path to current directory
// _filename - file name
// require - function to use modules
// module - info about current module (file)
// process - info about env where the program is being exicuded
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alt')
require('./7-mind')
sayHi('bob')
sayHi(names.john)
sayHi(names.peter)
