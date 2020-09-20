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

// console.log('This is the JavaScript entry file - your code begins here.');
let allTravelers, singleUserData, allTripData, allDestinationData;

function loadData() {    //rename later?
  let allTravelers = apiCalls.fetchAllUsersData();
  let singleUserData = apiCalls.fetchSingleUser();
  let allTripData = apiCalls.fetchAllTripsData();
  let allDestinationData = apiCalls.fetchAllDestinationsData()
  Promise.all([allTravelers, singleUserData, allTripData, allDestinationData])
  .then(data => { //data is everything returned in promise.all
    console.log("All Data", data)
    allTravelers = data[0].map(traveler => {
      return new Traveler(traveler)
    })
    //singleUserData????
    //let allUsers = data[0]
    // allUsers.forEach(user => {
    //   user = new User() //push this to an empty array at top of scripts
    // })
    //let allTrips = data[1] //ie whenever I'm calling my traveler this is my trips data
    //let allDestinations = data[2]
  })
}
loadData()
