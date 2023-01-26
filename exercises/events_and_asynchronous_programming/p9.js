// The track function
// INPUT: function
// OUTPUT: Function and side effects
// RETURN VALUE: 
//   function with side effects as follows:
//     -When event listener fires, add the event object to TRACKER.events
//     -  ALSO add the TARGET to the TRACKER.elements
//     -Then the function runs the callback passed as argument during addEventListener
// TRACKER OBJECT FEATURES
//   -EVENTS: an array of fired events
//   -LIST(): a method that returns the array of events
//   -elementsList: a list of elements targeted
//   -ELEMENTS(): a mehtod that returns the list of elements
//   -CLEAR(): a method that returns the new length of the elements AND events (0)
//   -I think ideally the events array and elementsList array should be private data


const tracker = (function makeTracker() {
  const elementsList = [];
  const events = [];
  return {
    list() {
      return [...events];
    },
    elements() {
      return [...elementsList];
    },
    clear() {
      elementsList.length = 0;
      events.length = 0;
    },
    addEvent(eve) {
      events.push(eve);
    },
    addElement(element) {
      elementsList.push(element);
    },
  };
})();


const track = function(callback) {
  return function trackHandler() {
    let element = event.target;
    if (!tracker.list().includes(event)) {
      tracker.addEvent(event);
      tracker.addElement(element);
    }
    callback(event);

  };
};

const divRed = document.querySelector('#red');
const divBlue = document.querySelector('#blue');
const divOrange = document.querySelector('#orange');
const divGreen = document.querySelector('#green');

divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));
