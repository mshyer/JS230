const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

document.addEventListener('DOMContentLoaded', () => {
  const fieldset = document.querySelector('fieldset');

  const Quiz = {
    init(questions, answerKey) {
      this.questions = questions;
      this.questionInputs = document.querySelectorAll('input[type="radio"]');
      this.displayQuestions();
      this.answerKey = answerKey;
      this.form = document.querySelector('form');
      this.submitButton = document.querySelector('#submit');
      this.resetButton = document.querySelector('#reset');
      this.questionBoxes = document.querySelectorAll('.question_box');
      this.results = document.querySelectorAll('.result');

      this.handleReset();
      this.handleSubmitQuiz();
      //this.handleMissingInput();
      //this.handleIncorrectInput();
      //this.handleCorrectInput();
    },

    disableSubmit() {
      this.submitButton.disabled = true;
      this.submitButton.classList.remove('active');
      this.resetButton.classList.add('active');
    },

    handleReset() {
      this.resetButton.addEventListener('click', (e) => {
        this.resetButton.classList.remove('active');
        this.submitButton.classList.add('active');
        this.submitButton.disabled = false;
        this.results.forEach(result => {
          result.className = 'result';
          result.textContent = '';
        });
      });
    },

    displayQuestions() {
      this.questions.forEach(question => {
        fieldset.insertAdjacentHTML('beforeend', Handlebars.templates.question(question));
      });
    },

    displayAnswers(answers) {
      this.results.forEach(result => {
        let answer = answers[result.dataset.id];
        if (answer) {
          let correctAnswer = this.answerKey[result.dataset.id];
          if (correctAnswer === answer) {
            result.classList.add('correct');
            result.textContent = 'correct!';
          } else {
            result.classList.add('incorrect');
            result.textContent = 'Incorrect. The correct answer was: ' + correctAnswer;
          }
        } else {
          result.classList.add('incorrect');
          result.textContent = 'You did not answer this question.';
        }
      });
        
    },

    handleSubmitQuiz() {
      let self = this;
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        self.disableSubmit();
        let answers = self.getAnswers();
        console.log(answers);
        self.displayAnswers(answers);

      });
    },

    getAnswers() {
      let answers = {};
      this.questionBoxes.forEach(box => {
        answers[box.dataset.id] = box.querySelector('input:checked') ? box.querySelector('input:checked').value : null;
      });
      return answers;
    },

  };

  Quiz.init(questions, answerKey);

});
