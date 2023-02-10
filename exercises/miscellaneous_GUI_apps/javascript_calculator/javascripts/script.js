document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttons = document.getElementById('buttons');
  const numberDisplay = document.getElementById('number_display');
  const operationsDisplay = document.getElementById('operations_display');

  const CalculatorApp = {
    init() {
      //this.tally = 0;
      this.memory = 0;
      this.currentVal = 0;
      this.runningTotal = 0;
      this.operations = [];
      numberDisplay.textContent = this.currentVal;
      operationsDisplay.textContent = this.operations;
      buttons.addEventListener('click', this.buttonClickHandler.bind(this));
    },

    updateScreen(flag = false) {
      numberDisplay.textContent = this.currentVal;
      operationsDisplay.textContent = this.operations.join(' ');
      if (flag) {
        numberDisplay.textContent = this.runningTotal;
      }
    },

    incrementCurrentValBy(digit) {
      let digitString = String(this.currentVal);
      return digitString + digit;
    },

    handleControlButton(e) {
      switch (e.target.id) {
        case 'ce':
          this.currentVal = 0;
          break;
        case 'c':
          this.tally = 0;
          this.currentVal = 0;
          this.operations.length = 0;
          break;
        case 'neg':
          this.currentVal = -this.currentVal;
          break;
      }
      this.updateScreen();
    },

    calculateRunningTotal() {
      let operations = [...this.operations]
      let total = operations.shift();
      while (operations.length > 1) {
        let operation = operations.shift();
        switch (operation) {
          case '+':
            total += Number(operations.shift());
            break;
          case '-':
            total -= Number(operations.shift());
            break;
          case 'x':
            debugger;
            total *= Number(operations.shift());
            break;
          case '/':
            total /= Number(operations.shift());
            break;
          case '%':
            total %= Number(operations.shift());
            break;
        }
      }
      return total;
    },

    handleOpButton(e) {
      //If the last operation is a number
      if (this.memory) {
        this.operations.push(this.runningTotal, e.target.textContent.trim());
        this.currentVal = this.memory;
        this.memory = 0;
      } else {
        this.operations.push(this.currentVal, e.target.textContent.trim());
      }
      console.log(this.operations);
      this.runningTotal = this.calculateRunningTotal();
      this.currentVal = 0;
      this.updateScreen(true);
    },

    handleDigitButton(e) {
      let digit = Number(e.target.textContent.trim());
      if (this.memory) {
        this.memory = 0;
      }
      if (this.currentVal === 0) {
        this.currentVal = digit;
      } else {
        this.currentVal = this.incrementCurrentValBy(digit);
      }
      this.updateScreen();
    },

    handleDotButton(e) {
      if (String(this.currentVal).includes('.')) {
        return;
      }
      this.currentVal = String(this.currentVal) + '.';
    },

    handleResultButton(e) {
      this.operations.push(this.currentVal);
      this.runningTotal = this.calculateRunningTotal();
      this.currentVal = 0;
      this.operations.length = 0;
      this.memory = this.runningTotal;
      //this.runningTotal = 0;
      this.updateScreen(true);
    },

    buttonClickHandler(e) {
      let button = e.target;
      if (button.tagName === 'A') {
        console.log('firing');
        switch (button.className) {
          case 'control':
            this.handleControlButton(e);
            break;
          case 'op':
            this.handleOpButton(e);
            break;
          case 'digit':
            this.handleDigitButton(e);
            break;
          case 'dot':
            this.handleDotButton(e);
            break;
          case 'result_button':
            this.handleResultButton(e);
            break;
        }
      }
    },
  };

  CalculatorApp.init();
});
