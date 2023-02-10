document.addEventListener('DOMContentLoaded', () => {
  Handlebars.registerPartial('model_options_template', document.getElementById('model_options_template').innerHTML);
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
    assignFilters(make = '') {
      filters.insertAdjacentHTML('afterbegin',
        templates.filter(template => template.id === 'filters_template')[0].text(this.generateCarInfoContext(make)));
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

    generateCarInfoContext(make) {
      this.resetCarFilter();
      if (make) {
        this.filteredCars = this.filteredCars.filter(car => car.make === make);
      }
      
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

    handleMakeSelect(e) {
      //console.log('firing');
      //if (e.target) {
      //  console.log('firing');
      //  filters.replaceChildren();
      //  this.assignFilters(e.target.value);
      //  let makeSelect = document.getElementById('make_select');
      //  makeSelect.addEventListener('select', this.handleMakeSelect.bind(this));

      //}
      let model_select = document.getElementById('model_select');
      model_select.replaceChildren();
      let models = [];
      cars.forEach(car => {
        if (!event.target.value || car.make === event.target.value) {
          models.push(car.model);
        }
      });
      models = [...new Set(models)];
      // models.forEach(model => {
      //   let option = document.createElement('option');
      //   option.textContent = model;
      //   option.value = model;
      //   model_select.append(option);
      // });
      let templateScript = Handlebars.compile(document.getElementById('model_options_template').innerHTML);
      let options2 = {model: models};
      console.log('woo');
      console.log(options2);
      model_select.insertAdjacentHTML('beforeend', templateScript(options2));

    },

    init(cars) {
      this.cars = cars;
      this.filteredCars = cars;
      //this.processTemplates();
      this.assignFilters();
      this.printInventory(cars);
      filterBtn.addEventListener('click', this.handleFilterBtnClick.bind(this));
      let makeSelect = document.getElementById('make_select');
      makeSelect.addEventListener('change', this.handleMakeSelect.bind(this));
      console.log(makeSelect);
    },
  };
  Object.create(App).init(cars);
});
