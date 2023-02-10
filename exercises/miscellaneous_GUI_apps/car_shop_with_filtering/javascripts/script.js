document.addEventListener('DOMContentLoaded', () => {
  const filters = document.getElementById('filters');
  const inventory = document.getElementById('inventory');
  const templates = [];
  const filterBtn = document.querySelector('#filter_button');
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
      filters.insertAdjacentHTML('afterbegin',
        templates.filter(template => template.id === 'filters_template')[0].text(this.generateCarInfoContext()));
      inventory.insertAdjacentHTML('beforeend',
        templates.filter(template => template.id === 'inventory_template')[0].text({cars: this.filteredCars}));

    },
    assignFilters(cars) {
      filters.insertAdjacentHTML('afterbegin',
        templates.filter(template => template.id === 'filters_template')[0].text(this.generateCarInfoContext()));
    },

    printInventory(cars) {
      inventory.replaceChildren();
      inventory.insertAdjacentHTML('beforeend',
        templates.filter(template => template.id === 'inventory_template')[0].text({cars: this.filteredCars}));
    },

    filterCars(make, model, price, year) {
      return cars.filter(car => {
        return (!make || car.make === make)  &&
          (!model || car.model === model) &&
          (!price || car.price === parseInt(price, 10)) &&
          (!year || car.year === parseInt(year, 10));
      });
    },

    resetCarFilter() {
      this.filteredCars = this.cars;
    },

    handleFilterBtnClick() {
      let make = document.getElementById('make_select').value;
      let model = document.getElementById('model_select').value;
      let price = document.getElementById('price_select').value;
      let year = document.getElementById('year_select').value;
      this.filteredCars = this.filterCars(make, model, price, year);
      this.printInventory();
      this.resetCarFilter();

    },


    generateCarInfoContext() {
      let carInfo = this.filteredCars.reduce((acc, car) => {
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
      return carInfo;
    },

    init(cars) {
      this.cars = cars;
      this.filteredCars = cars;
      //this.processTemplates();
      this.assignFilters();
      this.printInventory(cars);
      filterBtn.addEventListener('click', this.handleFilterBtnClick.bind(this));
    },
  };
  Object.create(App).init(cars);
});
