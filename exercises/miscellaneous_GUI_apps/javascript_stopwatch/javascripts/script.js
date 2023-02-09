document.addEventListener('DOMContentLoaded', () => {
  let app;
  const startStopButton = document.getElementById('start-stop');
  const resetButton = document.getElementById('reset');
  const centiseconds = document.getElementById('centi-seconds');
  const seconds = document.getElementById('seconds');
  const minutes = document.getElementById('minutes');
  const hours = document.getElementById('hours');

  const padZeros = function(number) {
    return number < 10 ? '0' + String(number) : String(number);
  };

  const App = {
    init() {
      this.centiseconds = 0;
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      return this;
    },
    
    startIntervals() {
      this.intervalId = setInterval(this.timerFunc.bind(this), 10);
    },

    stopIntervals() {
      clearInterval(this.intervalId);
    },

    incrementHours() {
      this.hours += 1;
      hours.textContent = padZeros(this.hours) + ':';
    },

    incrementMinutes() {
      this.minutes += 1;
      if (this.minutes === 60) {
        this.minutes = 0;
        this.incrementHours();
      }

      minutes.textContent = padZeros(this.minutes) + ':';

    },

    incrementSeconds() {
      this.seconds += 1;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.incrementMinutes();
      }

      seconds.textContent = padZeros(this.seconds) + ':';

    },

    timerFunc() {
      this.centiseconds += 1;
      if (this.centiseconds === 100) {
        this.centiseconds = 0;
        this.incrementSeconds();
      }
      centiseconds.textContent = padZeros(this.centiseconds);
    },

    reset() {
      centiseconds.textContent = '00';
      seconds.textContent = '00:';
      minutes.textContent = '00:';
      hours.textContent = '00:';
      this.centiseconds = 0;
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
    },
  };

  app = Object.create(App).init();

  startStopButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (startStopButton.className === 'start') {
      startStopButton.className = 'stop';
      startStopButton.textContent = 'stop';
      app.startIntervals();
    } else {
      startStopButton.className = 'start';
      startStopButton.textContent = 'start';
      app.stopIntervals();
    }
  });

  resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    app.stopIntervals();
    app.reset();
  });

});
