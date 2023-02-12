document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#registration_form');
  // const firstNameInput = document.getElementById('first_name');
  // const lastNameInput = document.getElementById('last_name');
  // const emailInput = document.getElementById('email');
  // const passwordInput = document.getElementById('password');
  // const phoneInput = document.getElementById('phone_number');
  // const inputListenersMap = {
  //   'first_name': firstNameListener,
  //   'last_name': lastNameListener,
  //   'email': emailListener,
  //   'password': passwordListener,
  //   'phone_number': phoneNumberListener,
  // };

  // function firstNameListener(event) {
  //   event.preventDefault();
  //   let errorMessage = firstNameInput.parentElement.querySelector('.error-message');
  //   if (firstNameInput.validity.valueMissing) {
  //     errorMessage.classList.add('active');
  //     errorMessage.textContent = 'Please enter a first name';
  //   } else {
  //     errorMessage.classList.remove('active');

  //   }
  // }

  // function lastNameListener(event) {
  //   if (lastNameInput.validity.valueMissing) {
  //     lastNameInput.setCustomValidity('Please enter a last name');
  //   } else {
  //     lastNameInput.setCustomValidity('');
  //   }
  // }

  // function emailListener(event) {
  //   if (emailInput.validity.patternMismatch) {
  //     emailInput.setCustomValidity('Email number must be in format xx@xx');
  //   } else {
  //     emailInput.setCustomValidity('');
  //   }
  // }

  // function passwordListener(event) {
  //   if (passwordInput.validity.tooShort) {
  //     passwordInput.setCustomValidity('Password must be at least 10 chars long');
  //   } else {
  //     passwordInput.setCustomValidity('');
  //   }
  // }

  // function phoneNumberListener(event) {
  //   if (phoneInput.validity.patternMismatch) {
  //     phoneInput.setCustomValidity('Phone number must be in format xxx-xxx-xxxx');
  //   } else {
  //     phoneInput.setCustomValidity('');
  //   }
  // }

  // const inputs = document.querySelectorAll('input');
  // for (let idx = 0; idx < inputs.length; idx += 1) {
  //   inputs[idx].addEventListener('change', inputListenersMap[inputs[idx].id]);
  // }

  // form.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   //let validity = form.reportValidity();
  //   //if (validity) {
  //   //  form.submit();
  //   //}

  // });
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

    handleFormSubmit() {
      if (this.form.checkValidity()) {
        this.formErrorField.textContent = '';
      } else {
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
      this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    },
  };

  App.init();

});
