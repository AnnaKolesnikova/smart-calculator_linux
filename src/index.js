class SmartCalculator {
  constructor(initialValue) {
      this.expressionStorage = String(initialValue);
      this.map = new Map([
          ['^'], ['*'], ['/'], ['-'], ['+']
      ]);
  }
  add(number) {
      let add = ' + ' + number;
      this.expressionStorage += add;
      return this;
  }
  subtract(number) {
      let sub = ' - ' + number;
      this.expressionStorage += sub;
      return this;
  }
  multiply(number) {
      let mult = ' * ' + number;
      this.expressionStorage += mult;
      return this;
  }
  devide(number) {
      let dev = ' / ' + number;
      this.expressionStorage += dev;
      return this;
  }
  pow(number) {
      let pow = ' ^ ' + number;
      this.expressionStorage += pow;
      return this;
  }
  valueOf() {
      let stack = [];
      let polishString = '';
      let expressionStorageSplitted = this.expressionStorage.split(' ');

      for (let i = 0; i < expressionStorageSplitted.length; i++) {
          let currentSymbol = expressionStorageSplitted[i];
          stack.push(currentSymbol);

          if (this.map.has(currentSymbol)) {

          }
          else {
              polishString += stack.pop() + ' ';

              let prevOper = stack.pop();
              if (prevOper != undefined) {
                  polishString += prevOper + ' ';
              }

          }
      }
      let polishStringSplitted = polishString.split(' ');

      for (let i = 0; i < polishStringSplitted.length; i++) {
          let currentSymbol = polishStringSplitted[i];

          if (currentSymbol == '') {
              continue;
          }

          if (!this.map.has(currentSymbol)) {
              stack.push(currentSymbol);
          }
          else {
              stack.push(eval(stack.pop() + currentSymbol + stack.pop()));
          }
      }
      return stack[0];
  }
}
module.exports = SmartCalculator;

// module.einumberitialValueports = SmartCalculator;

// class A {
//   valueOf() {
//     return true ? 1 : 0;
//   }
// }

// conumberst assert = require('assert');

// assert.equal(numberew A(), 1);
