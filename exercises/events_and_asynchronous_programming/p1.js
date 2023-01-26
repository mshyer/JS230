// Input: multiple callback functions (function objects)
// Output: side effect of running all the functions
// Data Structure: Asynchronous function calls
// Algorithm:
// Get each argument into an array
// Map the array with the return value of an asynchronous function call (promise)
//    The asynchronous function call should be delayed by random 2 * n

// const randomizer = async function(...callbacks) {
//   let intervalID;
// 
//   intervalID = setInterval(function() {
//     time += 1;
//     console.log(time)
//   }, 1000);
// 
//   callbacks.map(callback => {
//     return new Promise((success, fail) => {
//       success(setTimeout(callback, Math.floor(Math.random() * (2000 * callbacks.length))));
//     });
//   });
//   callbacks.forEach(back => console.log(back));
//   let time = 0;
//   let allDone = await Promise.all(callbacks).then(success => {
//     clearInterval(intervalID);
//   }).catch(error => {
//     console.error('Failed with error, ' + error);
//   });
// };

// Input: multiple functions
// Output: to the console every second, plus run each callback at a random time
// THE DIFFICULT PART: stopping the timer
//
// 1. start a timer
// 2. promise that all of the functions will return
//    How to turn a function call into a promise?
// 3. using promise.allSettled, stop the tmer once they have all resolved.

const randomizer = function(...callbacks) {
  let intervalID;
  let time = 0;
  intervalID = setInterval(function() {
    time += 1;
    console.log(time);
    if (time >= 10) {
      clearInterval(intervalID);
    }
  }, 1000);

  let promises = callbacks.map(cb => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(cb());
      }, Math.floor(Math.random() * (2000 * callbacks.length)));
    });
  });
  Promise.all(promises).then(success => {
    clearInterval(intervalID);
  });

};
function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}


randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6


