//Function has 4 inputs,
//  1. attaches an event listener to the 1st argument if possible
//  2. The event listener listens for the event type
//  3. The event listener should 
//
//  parentElement.addEventListener('click', 
//    if (currentTarget === the element in question) {
//      callback();
//    }

function findChildOfType(parentElement, childSelector) {
  let children = parentElement.children;
  if (children.length === 0) {
    return [];
  }

  let childs = parentElement.querySelectorAll(childSelector);
  return childs ? childs : undefined;
 //  for (let idx = 0; idx < children.length; idx += 1) {
 //    if (children[idx].tagName.toLowerCase() === childSelector) {
 //      return children[idx];
 //    }
 //    if (children[idx].children.length > 0) {
 //      let grandChild = findChildOfType(children[idx], childSelector);
 //      if (grandChild) {
 //        return grandChild;
 //      }
 //    }
 //  }
 //  return undefined;
}

function delegateEvent(parentElement, childSelector, action, callback) {
  //let childElement = document.querySelector(childSelector);
  if (!document.contains(parentElement)) {
    return undefined;
  }


  parentElement.addEventListener(action, (event) => {
    let target = event.target;
    let currentTarget = event.currentTarget;
    let childElements = Array.from(findChildOfType(parentElement, childSelector));
    if (childElements.includes(target)) {
      console.log(childElements);
      console.log(target);
      callback({target, currentTarget});
    }
  });
  return true;
}
// Possible elements for use with the scenarios
const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main');

// Possible callback for use with the scenarios
const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};
