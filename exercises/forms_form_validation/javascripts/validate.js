document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('registration_form');
  const fnInput = document.getElementById('first_name');
  const lnInput = document.getElementById('ln');
  const xxInput = document.getElementById('password');
  const pnInput = document.getElementById('phone_number');
  const emInput = document.getElementById('email');

  const Validator = {
    init(form) {
      this.addFormListener();
      this.firstName = '';
      this.lastName = '';
      this.password = '';
      this.email = '';
      this.phone = '';
    },

    setUpValidations() {
      this.firstName = fnInput.value;
      this.lastName = lnInput.value;
      this.passwod = xxInput.value;
      this.email = emInput.value;
      this.phone = pnInput.value;
    },

    performValidations() {
      const invalid_inputs = [];
      const validations = { fn: this.validFirstName, ln: this.validLastName, em: this.validEmail,
        xx: this.validXX, pn: this.validPhone};
      for (let key in validations) {
        if (validations[key]()) {
          invalid_inputs.push(key);
        }
      }
      return invalid_inputs.length === 0 ? null : invalid_inputs;
    },

    validFirstName() {
      return this.firstName.length >= 1;
    },

    validLastName() {
      return this.firstName.length >= 1;
    },

    validEmail() {
      if (this.email.length < 1) {
        return false;
      }
      return /.+@.+/.test(this.email);
    },

    validXX() {
      return this.password.length >= 10;
    },

    validPhone() {
      return /^\d\d\d-\d\d\d-\d\d\d\d$/.test(this.phone);
    },

    addFormListener() {
      form.addEventListener('focusout', (e) => {
        e.preventDefault();
        this.setUpValidations();
        let invalid_inputs = this.performValidations();
        if (invalid_inputs) {
          displayErrorMessages(invalid_inputs);
        }

      });
    },
  };

  Validator.init();
});
