let apiURL = `https://fe-apps.herokuapp.com/api/v1/travel-tracker`

let apiCalls = {
  fetchAllUsersData() {
    return fetch(`${apiURL}/data/travelers/travelers`)
    .then(response => response.json())
    .then(data => data.travelers)
    .catch(error => console.log(error))
  },

  fetchSingleUser(userID) {
    return fetch(`${apiURL}/data/travelers/travelers/${userID}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
  },

  fetchAllTripsData() {
    return fetch(`${apiURL}/data/trips/trips`)
    .then(response => response.json())
    .then(data => data.trips)
    .catch(error => console.log(error))
  },

  fetchAllDestinationsData() {
    return fetch(`${apiURL}/data/destinations/destinations`)
    .then(response => response.json())
    .then (data => data.destinations)
    .catch(error => console.log(error))
  },
  
  postTrip(bookTripInfo) {
    return fetch(`${apiURL}/data/trips/trips`, {
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
