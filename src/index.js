// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import moment from 'moment';
import './images/turing-logo.png';
import './index.js';
import apiCalls from './apiCalls.js';
import Traveler from './Traveler.js';
import Destination from './Destination.js';
import Trip from './Trip.js';
import domUpdates from './domUpdates.js';

 let userID;
 let allUsers;
 let singleUser;
 let allTripData;
 let allDestinationData;
 let bookTripInfo;
 let today = moment().format('YYYY/MM/DD')

 let username = document.getElementById('username-input');
 let password = document.getElementById('password-input');
 let loginButton = document.querySelector('.login-button');
 let tripCostButton = document.getElementById('estimated-cost-btn');
 let submitTripButton = document.querySelector('.submit-btn');
 let tripInfoArea = document.querySelector('.trip-information-area');
 let tripsArea = document.querySelector('.trips-area');
 let loginForm = document.querySelector('.login-form');

 submitTripButton.addEventListener('click', function() {
   apiCalls.postTrip(bookTripInfo);
   submitTripButton.disabled = true;
   alert('Your trip has been submitted for processing!');
   loadData(userID);
 })

 loginButton.addEventListener('click', attemptUserLogin);
 tripCostButton.addEventListener('click', getBookedTripInfo);

 function attemptUserLogin() {
  if (username.value.includes('traveler') && username.value.split('traveler')[1] > 0 && username.value.split('traveler')[1] < 51 && password.value === 'travel2020') {
    userID = parseInt(username.value.substr(8))
    loadData(userID)
    tripInfoArea.classList.remove('hidden');
    tripsArea.classList.remove('hidden');
    document.querySelector('header').classList.remove('hidden');
    loginForm.classList.add('hidden');
    document.querySelector('body').style.backgroundImage = 'none';
  } else {
    alert('Incorrect username or password')
  }
}

function loadData(userID) {
  let travelerData = apiCalls.fetchAllUsersData();
  let userData = apiCalls.fetchSingleUser(userID);
  let tripsData = apiCalls.fetchAllTripsData();
  let destinationsData = apiCalls.fetchAllDestinationsData()
  Promise.all([travelerData, userData, tripsData, destinationsData])
  .then(data => {
    allUsers = data[0].map(traveler => {
      return new Traveler(traveler);
    })
    singleUser = new Traveler(data[1]);
    allTripData = data[2].map(trip => {
      return new Trip(trip);
    })
    allDestinationData = data[3].map(destination => {
      return new Destination(destination);
    })
    domUpdates.getData(allUsers, singleUser, allTripData, allDestinationData);
  })
  .then(() => getAllData(singleUser, allTripData, today))
  .then(() => showTravelerDashboard());
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
  domUpdates.displayTrips();
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
  let selectedTrip = new Trip(bookTripInfo);
  let estimatedTripCost = selectedTrip.calculateTripCost(allDestinationData);
  if (travelersInput > 0 && dateInput !== '' && durationInput !== '') {
    domUpdates.displayTripCost(estimatedTripCost);
  } else {
    alert('Make sure to fill out all fields');
  }
}
