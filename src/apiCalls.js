//https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/1
//where<id> will be a number of a traveler’s id

let apiCalls = {
  fetchAllUsersData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
    .then(response => response.json())
    .then(data => data.travelers)
    .catch(error => console.log(error))
  },
  fetchAllTripsData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
    .then(response => response.json())
    .then(data => data.trips)
    .catch(error => console.log(error))
  }
}


// const getSingleUser = () => {
//   return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/1`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
// }


// if (typeof module !== 'undefined') {
//   module.exports = getSingleUser;
// }

export default apiCalls
