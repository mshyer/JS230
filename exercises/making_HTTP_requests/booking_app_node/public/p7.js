function cancelSchedule(scheduleId) {
  let request = new XMLHttpRequest();
  request.open('DELETE', `/api/schedules/${scheduleId}`);
  request.addEventListener('load', () => {
    if (request.status === 204) {
      alert('schedule removed successfully.');
    } else {
      alert('failed: ' + request.responseText);
    }
  });
  request.send();
}

function cancelBooking(bookingId) {
  let request = new XMLHttpRequest();
  request.open('PUT', `/api/bookings/${bookingId}`);
  request.addEventListener('load', () => {
    if (request.status === 204) {
      alert('schedule removed successfully.');
    } else {
      alert('failed: ' + request.responseText);
    }
  });
  request.send();
}

cancelSchedule();
cancelBooking();
