// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './index.js'; //do I need to do this?
import apiCalls from './apiCalls.js';
import Traveler from './Traveler.js';
import Destination from './Destination.js';
import Trip from './Trip.js';
import domUpdates from './domUpdates.js';

// console.log('This is the JavaScript entry file - your code begins here.');
let destinationSelector = document.getElementById('destination-selector');

 let allUsers
 let singleUser
 let allTripData
 let allDestinationData;

function loadData() {    //rename later?
  let travelerData = apiCalls.fetchAllUsersData();
  let userData = apiCalls.fetchSingleUser();
  let tripsData = apiCalls.fetchAllTripsData();
  let destinationsData = apiCalls.fetchAllDestinationsData()
  Promise.all([travelerData, userData, tripsData, destinationsData])
  .then(data => { //data is everything returned in promise.all
    console.log("All Data", data)
    allUsers = data[0].map(traveler => {
      return new Traveler(traveler)
    })
    //console.log("allTravelers", allUsers)
    // singleUser = new Traveler(data[1])
    singleUser = allUsers[Math.floor(Math.random() * allUsers.length)]
    console.log("singleUserData", singleUser)
    allTripData = data[2].map(trip => {
      return new Trip(trip);
    })
    //console.log("allTripData", allTripData)
    allDestinationData = data[3].map(destination => {
      return new Destination(destination);
    })
    //console.log("allDestinationData", allDestinationData)
    domUpdates.getData(allUsers, singleUser, allTripData, allDestinationData)
  })
  .then(() => showTravelerDashboard())
}

loadData()

function showTravelerDashboard() {
  domUpdates.showDestinationsDropdown()
  //domUpdates methods can be chained here
}





// function showDestinationsDropdown() {
//   // let destinationSelector = document.querySelector('#destination-selector');
//   console.log("derp", this.destinations)
//   allDestinationData.forEach(destination => {
//     console.log(destination)
//   })

//showDestinationsDropdown()
