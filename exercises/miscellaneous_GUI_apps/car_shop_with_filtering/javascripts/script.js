document.addEventListener('DOMContentLoaded', () => {
  const filters = document.getElementById('filters');
  const inventory = document.getElementById('inventory');
  const templates = [];
  let templateScripts = document.querySelectorAll("script[type='text/x-handlebars-template']");
  templateScripts.forEach(template => {
    templates.push({id: template.id, text: Handlebars.compile(template.innerHTML)}) 
  });

  const cars = [
    { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
    { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
    { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
    { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
    { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
  ];

  const App = {
    processTemplates() {
      filters.insertAdjacentHTML('beforeend',
        templates.filter(template => template.id === 'filters_template')[0].text(this.generateCarInfoContext()));
      inventory.insertAdjacentHTML('beforeend',
        templates.filter(template => template.id === 'inventory_template')[0].text({cars: cars}));

    },

    generateCarInfoContext() {
      // let makes = cars.reduce((acc, car) => {
      //   if (!acc.includes(car.make)) {
      //     acc.push(car.make);
      //     return acc;
      //   }
      //   return acc;
      // }, []);

      let carInfo = cars.reduce((acc, car) => {
        for (let prop in car) {
          if (!acc[prop]) {
            acc[prop] = [car[prop]];
          } else if (!acc[prop].includes(car[prop])) {
            acc[prop].push(car[prop]);
          }
        }
        return acc;
      }

      , {});

      //let models = [];
      //let years = [];
      //let prices = [];

      console.log(carInfo);
      return carInfo;
    },

    init(cars) {
      this.cars = cars;
      this.processTemplates();
    },
  };
  Object.create(App).init(cars);

});
