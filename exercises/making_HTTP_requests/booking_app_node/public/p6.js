//Steps:
//1: get the booked schedules from the correct url
//  -GET /api/bookings
//2: get the schedule data for the above dates
//  =GET /api/bookings/date
//    -discard a schedule if no email
//3: Create an UL
//  -Add each date to the UL as a LI
//  -Wrap each of these in an A tag
//  -Add as a child to each list item, the appropriate booking(s)? in another UL!
//    -This child li should be toggled (hidden not hidden) when parent UL LI clicked

//Using promises would be cool
//

function makeRequest(method, url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: xhr.status,
        statusText: xhr.statusText,
      });
    };
    xhr.send();
  });
}

const getDates = async function() {
  const bookingDatesPromise = makeRequest('GET', '/api/bookings');
  const bookingDates = await bookingDatesPromise;
  return bookingDates;
};

const getBookingForDate = async function(date) {
  let request;
  try {
    request = JSON.parse(await makeRequest('GET', `api/bookings/${date}`));
  } catch (err) {
    console.error(err);
  }
  return request;

};

const getBookingsForDates = async function() {
  let dates;
  const bookings = {};
  try {
    dates = JSON.parse(await getDates());
  } catch (err) {
    console.error(err);
  }

  for (let idx = 0; idx < dates.length; idx += 1) {
    let booking = getBookingForDate(dates[idx]);
    bookings[dates[idx]] = await booking;
  }
  return bookings;
};

const populateList = async function() {
  const datesUL = document.createElement('ul');
  datesUL.id = 'dates_ul';
  try {
    const bookings = await getBookingsForDates();
    let keys = Object.keys(bookings);
    for (let idx = 0; idx < keys.length; idx ++) {
      let newLi = document.createElement('li');
      newLi.id = `date_li_${idx}`;
      newLi.textContent = keys[idx];
      let nestedUl = document.createElement('ul');
      nestedUl.id = `nested_ul_${idx}`;
      nestedUl.hidden = true;
      newLi.addEventListener('click', (event) => {
        let ulToToggle = document.querySelector(`#nested_ul_${idx}`);
        ulToToggle.hidden = !ulToToggle.hidden;
      });
      let nestedLi = document.createElement('li');
      nestedLi.id = `nested_li_${idx}`;
      nestedUl.appendChild(nestedLi);
      nestedLi.textContent = bookings[keys[idx]];

      newLi.appendChild(nestedUl);
      datesUL.appendChild(newLi);
    }
    document.body.appendChild(datesUL);
  } catch (err) {
    console.error(err);
  }
};
populateList();
