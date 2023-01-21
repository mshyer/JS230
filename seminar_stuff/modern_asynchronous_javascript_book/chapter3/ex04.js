const promises = [
  fetch('https://picsum.photos/200', {mode: "no-cors"}), 
  fetch('https://does-not-exist', {mode: "no-cors"}),
  fetch('https://picsum.photos/100/200', {mode: "no-cors"})
];

Promise.allSettled(promises).
    then((results) => results.forEach(result => {
       if (result.status === 'fulfilled') {
         console.log(result.status,result.value);
       } else {
         console.log(result.status,result.reason);
       }
    }), (fail) => {
      console.log('failed');
    }
    );
