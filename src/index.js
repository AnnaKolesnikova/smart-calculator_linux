class SmartCalculator {
    constructor(initialValue) {
        this.expressionStorage = String(initialValue);
        this.map = new Map([
            ['**'], ['*'], ['/'], ['-'], ['+']
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
        let pow = ' ** ' + number;
        this.expressionStorage += pow;
        return this;
    }
    valueOf() {
        let stack = [];
        let polishString = [];
        let expressionStorageSplitted = this.expressionStorage.split(' ');

        for (let i = 0; i < expressionStorageSplitted.length; i++) {
            let currentSymbol = expressionStorageSplitted[i];
            stack.push(currentSymbol);

            if (this.map.has(currentSymbol)) {
                if (currentSymbol == '**') {
                    stack.pop();
                    let last = polishString.pop();
                    let res = polishString.pop();
                    if (res == undefined) {
                        res = last;
                        last = undefined;
                    }
                    for (var j = 1; j < expressionStorageSplitted[i + 1]; j++) {
                        res *= res;
                    }
                    i++;
                    polishString.push('' + res);
                    if (last != undefined) {
                        polishString.push(last);
                    }

                }
            }
            else if (currentSymbol) {
                polishString.push(stack.pop());

                let prevOper = stack.pop();
                if (prevOper != undefined) {
                    polishString.push(prevOper);
                }
            }
        }

        let result = 0;
        for (let i = 0; i < polishString.length; i++) {
            let currentSymbol = polishString[i];
            stack.push(currentSymbol);

            if (this.map.has(currentSymbol)) {
                stack.pop();
                let a = stack.pop();
                let b = stack.pop();
                result = b + currentSymbol + a;
                stack.push(result);
            }
        }
        let 
        return parceInt(stack[0], 2);
    }
   
}

module.exports = SmartCalculator;