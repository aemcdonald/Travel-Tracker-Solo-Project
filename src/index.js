// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import moment from 'moment';
import './images/turing-logo.png';
import './index.js'; //do I need to do this?
import apiCalls from './apiCalls.js';
import Traveler from './Traveler.js';
import Destination from './Destination.js';
import Trip from './Trip.js';
import domUpdates from './domUpdates.js';

// console.log('This is the JavaScript entry file - your code begins here.');
window.addEventListener('load', loadData)

 let allUsers
 let singleUser
 let allTripData
 let allDestinationData;
 let bookTripInfo;
 let today = moment().format('YYYY/MM/DD')
 let tripCostButton = document.getElementById('estimated-cost-btn');
 const submitTripButton = document.querySelector('.submit-btn');

 submitTripButton.addEventListener('click', getBookedTripInfo);
 submitTripButton.addEventListener('click', function() {
   getBookedTripInfo();
   apiCalls.postTrip(bookTripInfo);
   loadData();
 })

 tripCostButton.addEventListener('click', getBookedTripInfo)

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
    // singleUser = allUsers[Math.floor(Math.random() * allUsers.length)]
    singleUser = allUsers[2] //2
    //console.log("singleUserData", singleUser)
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
  .then(() => getAllData(singleUser, allTripData, today))
  .then(() => showTravelerDashboard())
}

function getAllData(singleUser, allTripData, today) {
  singleUser.getAllTrips(allTripData);
  singleUser.getPastTrips(today);
  singleUser.getCurrentTrip(today);
  singleUser.getUpcomingTrips(today);
  singleUser.sortPendingTrips();
}

function showTravelerDashboard() {
  domUpdates.showDestinationsDropdown();
  domUpdates.showWelcomeUser(singleUser);
  domUpdates.showTravelerExpensesYTD(today);
  domUpdates.displayTrips()
  //domUpdates methods can be chained here
}

function getBookedTripInfo() {
  let capturedUserID = {userID: singleUser.id}
  let id = Date.now();
  let userID = capturedUserID.userID;
  let destinationID = +document.getElementById('destination-selector').value;
  let travelersInput = +document.getElementById('trip-travelers').value;
  let dateInput = document.getElementById('trip-date').value;
  let selectedDate = moment.utc((new Date(dateInput))).format('YYYY/MM/DD');
  let durationInput = +document.getElementById('trip-duration').value;
  bookTripInfo = {
    id: id,
    userID: userID,
    destinationID: destinationID,
    travelers: travelersInput,
    date: selectedDate,
    duration: durationInput,
    status: 'pending',
    suggestedActivities: []
  }
  let selectedTrip = new Trip(bookTripInfo)
  getTripCost(selectedTrip, allDestinationData)
}

function getTripCost(selectedTrip, allDestinationData) {
  let estimatedTripCost = selectedTrip.calculateTripCost(allDestinationData)
  alert(`Your current selections will cost $${estimatedTripCost}, click "submit" to book!`) //need to create an alert for trip cost
}
