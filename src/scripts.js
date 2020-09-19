 import apiCalls from './apiCalls.js';

 function loadData() {    //rename later?
   let allUserData = apiCalls.fetchAllUsersData()
   let allTripData = apiCalls.fetchAllTripsData()
   let allDestinationData = apiCalls.fetchAllDestinationsData()
   Promise.all([allUserData, allTripData, allDestinationData])
   .then(data => { //data will be everything returned in promise.all
     console.log("All Data", data)
     //let allUsers = data[0]
     //let allTrips = data[1] //ie whenever I'm calling my traveler this is my trips data
     //let allDestinations = data[2]
   })
 }
 loadData()
//const user = getSingleUser()
// const getSingleUser = () => {
//   return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/1`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
// }

// let user;
// function grabUserData() {
//   Promise.all([getSingleUser()])
//   .then(value => {
//     let user = value[0]; //value 0 is referring to the first Promise returned in the Promise.all
//     console.log(user)
//   })
// }

//grabUserData()
