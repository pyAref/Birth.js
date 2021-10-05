// Path: test\test.js
const { Birth } = require('../index');

// object
const BirthDay = new Birth('2003-12-8');
console.log(`Date : ${BirthDay.BirthDate}`);
console.log(BirthDay.getDays());   
// return 6511
