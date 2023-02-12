document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#registration_form');
  const App = {
    form: form,
    bindFocusEvents() {
      this.inputs.forEach(input => {
        input.addEventListener('focus', this.handleFocus.bind(this));
      });
    },

    bindBlurEvents() {
      this.inputs.forEach(input => {
        input.addEventListener('blur', this.handleBlur.bind(this));
      });
    },

    bindKeypressEvents() {
      document.getElementById('first_name').addEventListener('keypress', this.blockNonAlpha.bind(this));
      document.getElementById('last_name').addEventListener('keypress', this.blockNonAlpha.bind(this));

      document.getElementById('cd1').addEventListener('keypress', this.blockNonNumeric.bind(this));
      document.getElementById('cd2').addEventListener('keypress', this.blockNonNumeric.bind(this));
      document.getElementById('cd3').addEventListener('keypress', this.blockNonNumeric.bind(this));
      document.getElementById('cd4').addEventListener('keypress', this.blockNonNumeric.bind(this));

      document.getElementById('cd1').addEventListener('keyup', this.autoForward.bind(this));
      document.getElementById('cd2').addEventListener('keyup', this.autoForward.bind(this));
      document.getElementById('cd3').addEventListener('keyup', this.autoForward.bind(this));
      document.getElementById('cd4').addEventListener('keyup', this.autoForward.bind(this));
    },

    blockNonAlpha(e) {
      if (!e.key.match(/[a-zA-Z]/)) {
        e.preventDefault();
      }
    },

    autoForward(e) {
      if (e.target.value.length >= 4 && e.key !== 'Tab' && e.key !== 'Shift') {
        console.log(e.key);
        e.target.nextElementSibling.nextElementSibling.focus();

      }
    },

    blockNonNumeric(e) {
      if (!e.key.match(/\d/)) {
        e.preventDefault();
      }
    },

    handleFocus(e) {
      let elem = e.target;
      let errorM = elem.parentElement.querySelector('.error-message');
      errorM.textContent = '';
      errorM.classList.remove('active');
    },

    handleBlur(e) {
      let elem = e.target;
      let errorM =elem.parentElement.querySelector('.error-message');
      if (elem.checkValidity()) {
        errorM.textContent = '';
        errorM.classList.remove('active');
      } else {
        this.validateControl(elem);
      }

    },
    validateControl(control) {
      if (control.validity.valueMissing) {
        this.handleValueAbsence(control);
        return false;
      } else if (control.validity.patternMismatch) {
        this.handlePatternMismatch(control);
        return false;
      }
      return true;

    },

    handleValueAbsence(control) {
      let labelText = control.parentElement.querySelector('label').textContent;
      let errorMessage = control.parentElement.querySelector('.error-message');
      control.classList.add('invalid_field');
      errorMessage.textContent = labelText + ' is a required field';
      errorMessage.classList.add('active');
    },

    handlePatternMismatch(control) {
      let labelText = control.parentElement.querySelector('label').textContent;
      let errorMessage = control.parentElement.querySelector('.error-message');
      control.classList.add('invalid_field');
      errorMessage.textContent = labelText + ' must match pattern ' + control.getAttribute('pattern');
      errorMessage.classList.add('active');
    },

    handleFormSubmit(e) {
      if (this.form.checkValidity()) {
        this.formErrorField.textContent = '';
      } else {
        e.preventDefault();
        this.formErrorField.textContent = 'Form Cannot be submitted until errors are corrected';
        this.validateFormInputs();
        return false;
      }
    },
    validateFormInputs() {
      let self = this;
      this.inputs.forEach(input => {
        self.validateControl(input);
      });
    },

    init() {
      this.formErrorField = document.querySelector('#form-errors');
      this.inputs = document.querySelectorAll('input');
      this.bindFocusEvents();
      this.bindBlurEvents();
      this.bindKeypressEvents();
      this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    },
  };

  App.init();

});
