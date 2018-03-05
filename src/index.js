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

            }
            else if(currentSymbol){
                polishString.push(stack.pop());

                let prevOper = stack.pop();
                if (prevOper != undefined) {
                    polishString.push(prevOper);
                }
            }
        }

        //let polishStringSplitted = polishString.split(' ');
        //let result = [];
        let result = 0;
        for (let i = 0; i < polishString.length; i++) {
            let currentSymbol = polishString[i];
            stack.push(currentSymbol);

            if(this.map.has(currentSymbol)){
                stack.pop();
                let a = stack.pop();
                let b = stack.pop();
                result = b + currentSymbol + a;
                stack.push(result);
            }
          
            // if (currentSymbol == '') {
            //     continue;
            // }

            // if (!this.map.has(currentSymbol)) {
            //     stack.push(currentSymbol);
            // }
            // else {
            //     stack.push(eval(stack.pop() + currentSymbol + stack.pop()));
            // }
        }
        return eval(stack[0]); 
    }
}

 module.exports = SmartCalculator;