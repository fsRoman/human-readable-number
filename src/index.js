const converter = require('number-to-words');

module.exports = function toReadable (number) {
  return converter.toWords(number).replace(/-/g," ");
}
