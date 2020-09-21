
let apiCalls = {
  fetchAllUsersData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
    .then(response => response.json())
    .then(data => data.travelers)
    .catch(error => console.log(error))
  },
  //make sure to pass in ID & interpolate ID in url...
  fetchSingleUser() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/2')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
  },
  fetchAllTripsData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
    .then(response => response.json())
    .then(data => data.trips)
    .catch(error => console.log(error))
  },
  fetchAllDestinationsData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    .then(response => response.json())
    .then (data => data.destinations)
    .catch(error => console.log(error))
  },
  postTrip(bookTripInfo) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookTripInfo)
    })
    .then(response => response.json())
    .then(data => console.log('success:', data))
    .catch(err => console.log('failed', err.message))
  }
}

export default apiCalls;
