class Calculator {
    constructor() {
        this.runningTotal = null;
        this.buffer = '0';
        this.previousOperator = null;
        this.screen = document.querySelector('.screen');
        this.init();
    }

    init() {
        document.querySelector('.calc-buttons').addEventListener('click', (event) => {
            this.buttonClick(event.target.innerText);
        });
    }

    buttonClick(value) {
        isNaN(value) ? this.handleSymbol(value) : this.handleNumber(value);
        this.screen.innerText = this.buffer;
    }

    handleSymbol(symbol) {
        switch (symbol) {
            case 'C':
                this.buffer = '0';
                this.runningTotal = null;
                break;
            case '=':
                if (this.previousOperator === null) return;
                this.performCalculation(parseInt(this.buffer));
                this.previousOperator = null;
                this.buffer = '' + this.runningTotal;
                this.runningTotal = null;
                break;
            case '←':
                this.buffer = this.buffer.length === 1 ? '0' : this.buffer.slice(0, -1);
                break;
            default:
                this.handleMath(symbol);
                break;
        }
    }

    handleMath(operator) {
        if (this.buffer === '0') return;
        const bufferValue = parseInt(this.buffer);
        if (this.runningTotal === null) {
            this.runningTotal = bufferValue;
        } else {
            this.performCalculation(bufferValue);
        }
        this.previousOperator = operator;
        this.buffer = '0';
    }

    performCalculation(bufferValue) {
        switch (this.previousOperator) {
            case '+':
                this.runningTotal += bufferValue;
                break;
            case '−':
                this.runningTotal -= bufferValue;
                break;
            case '×':
                this.runningTotal *= bufferValue;
                break;
            case '÷':
                this.runningTotal /= bufferValue;
                break;
        }
    }

    handleNumber(numberString) {
        this.buffer = this.buffer === '0' ? numberString : this.buffer + numberString;
    }
}

new Calculator();


// let buffer = '0';
// let previousOperator = '';
// let runningTotal = '0';
// let screen = document.querySelector('.screen');
// function init() {
//     let value = document.querySelector('.calc-buttons');
//     value.addEventListener('click', function (event) {
//         buttonClicked(event.target.innerText);
//     });
// }

// function buttonClicked(value) {
//     isNaN(value) ? handleSymbol(value) : handleNumber(value);
//     screen.innerText = buffer;
// }

// function handleSymbol(symbol) {
//     switch (symbol) {
//         case 'C': 
//             buffer = '0';
//             runningTotal = '0';
//             break;
//         case '←':
            
//             break;
//         case '=':
//             break;
//         default:
//             handleMath(symbol);
//     }
// }

// function handleNumber(numberString) {
//     buffer = buffer.length === 0 ? numberString : buffer + numberString;
// }

// init();

