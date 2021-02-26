module.exports = function toReadable (number) {
  const textNum = {
    'lessThan10': ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    'lessThan20': ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    'lessThan100': ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    'moreThan100': function(num){return num < 1 ? '' : `${this.lessThan10[num]} hundred`},
    'getTextNum': function(num){
      switch(true){
        case num < 10:
          return this.lessThan10[num];
        case num < 20:
          return this.lessThan20[num - 10];
        case num < 100:
          return this.lessThan100[Math.floor(num / 10)] + (num % 10 > 0 ? ` ${this.getTextNum(num % 10)}` : '');
        default:
          return this.moreThan100(Math.floor(num / 100)) + (num % 100 > 0 ? ` ${this.getTextNum(num % 100)}` : '');
      }
    }
  }
  return textNum.getTextNum(number);
}
