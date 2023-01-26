// PROBLEM: disable options when certain are selected
// USING THE CHANGE EVENT
//   event.target.value represents the changed selection
// Add event listener to select
//   the TARGET VALUE: look it up in a table
//     disable the opetions
//       -If the animal classifications is selected
//       - Get the animals select element
//         -remove the generic animals option
//         - Get all of the options into an array
//         - Loop through the array
//         - If the value is not in the table, remove it
//    RETHINK:
//      on the event firing:
//      Inner html
//      For each of the table values, add the options back
//      The first should be selected


const filter1 = {
  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich'],
};

const filter2 = {
  Bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
  Turtle: ['Vertebrate', 'Cold-blooded'],
  Whale: ['Vertebrate', 'Warm-blooded', 'Mammal'],
  Salmon: ['Vertebrate', 'Cold-blooded'],
  Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
};

let animalClasses = document.querySelector('#animal-classifications');
let animals = document.querySelector('#animals');

//STEP 1: WHEN YOU SELECT AN ANIMAL CLASS, DELETE ALL THE ANIMAL OPTIONS

document.addEventListener('DOMContentLoaded', () => {
  let subClasses = document.querySelectorAll('#animal-classifications option');
  let subAnimals = document.querySelectorAll('#animals option');
  animalClasses.addEventListener('change', (eve) => {
    let val = eve.target.value;
    if (Array.isArray(filter1[val])) {
      subAnimals.forEach(animal => {
        animal.hidden = false;
      });
      subAnimals.forEach(animal => {
        if (!filter1[val].includes(animal.value)) {
          animal.hidden = true;
        }
      });

    }

  });

  animals.addEventListener('change', (eve) => {
    let val = eve.target.value;
    if (Array.isArray(filter2[val])) {
      subClasses.forEach(subClass => {
        subClass.hidden = false;
      });
      subClasses.forEach(subClass => {
        if (!filter2[val].includes(subClass.value)) {
          subClass.hidden = true;
        }
      });

    }

  });

  let clear = document.querySelector('#clear');
  clear.addEventListener('click', () => {
    subClasses.forEach(subClass => {
      subClass.hidden = false;
    });
    subAnimals.forEach(animal => {
      animal.hidden = false;
    });
  });
});


//RESET BUTTON
//  Get the options for both tables
//  Set disabled to false for them all
