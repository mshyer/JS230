// I don't need to use a view template for this
// Store the info paragraphs as paragraphs with class modal
// Each team member will have a data attribute with their name
// If you click the team member's a with the data attribute, it:
//   1. Displays the modal page
//   2. Sets the modal image and paragraph to the correct values
//        -The correct will be labeled with the data attribute
// 1. Label all the data with data attributes and create paragraphs
// 2. Create the modal layer
// 3. Populate the modal larer


document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-layer');

  function getDataType(element) {
    if (element.className === 'modal-ul') {
      return '';
    }
    if (element.hasAttribute('data-member')) {
      //return element.getAttribute('data-member');
      return element.dataset;
    }
    return getDataType(element.parentNode);
  }
  const displayModal = function(data) {
    modal.style = 'display: block';
    console.table(data);
    let img = document.getElementById('modal-image');
    img.src = data.imageSource;
    let modalTitle = modal.querySelector('h3');
    modalTitle.textContent = data.member;
    let modalText = modal.querySelector('p');
    modalText.textContent = data.text;


  };
  const closeResetModal = function() {
    modal.style = 'display: none';
  };
  const addBodyListener = function() {
    document.body.addEventListener('click', function(event) {
      console.log('body clicked');
      event.preventDefault();
      event.stopPropagation();
      closeResetModal();
      addModalListener();
    }, {once: true});
  };

  function addModalListener() {
    document.querySelector('.modal-ul').addEventListener('click', (event) => {
      event.preventDefault();
      console.log('fired');
      let data = getDataType(event.target);
      if (data) {
        displayModal(data);
        event.stopPropagation();
        addBodyListener();
      } else {
        addModalListener();
      }
    }, {once: true});
  }
  addModalListener();


});
