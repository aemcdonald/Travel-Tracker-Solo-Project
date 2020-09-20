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
let destinationSelector = document.querySelector('#destination-selector');

 let allUsers;
 let singleUser;
 let allTripData;
 let allDestinationData;

function loadData() {    //rename later?
  let destinationsData = apiCalls.fetchAllDestinationsData()
  Promise.all([apiCalls.fetchAllUsersData(), apiCalls.fetchSingleUser(),
    apiCalls.fetchAllTripsData(), apiCalls.fetchAllTripsData()])
  .then(data => {
    allUsers = data[0].map(traveler => new Traveler(traveler))
    singleUser = allUsers[Math.floor(Math.random() * allUsers.length)]
    console.log("singleUserData", singleUser)
    allTripData = data[2].map(trip => new Trip(trip))
    allDestinationData = data[3].map(destination => new Destination(destination))
    domUpdates.getData(allUsers, singleUser, allTripData, allDestinationData)
  })
}

loadData()

function showTravelerDashboard(){
  domUpdates.showDestinationsDropdown(allDestinationData)
}
