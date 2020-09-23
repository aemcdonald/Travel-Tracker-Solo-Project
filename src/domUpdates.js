const domUpdates = {
  allUsers: null,
  traveler: null,
  trips: null,
  destinations: null,

  getData(allUsers, singleUser, allTripData, allDestinationData, date) {
    this.allUsers = allUsers;
    this.traveler = singleUser;
    this.trips = allTripData;
    this.destinations = allDestinationData;
  },
  showDestinationsDropdown() {
    let destinationSelector = document.querySelector('#destination-selector');
    let sortedDestinations = this.destinations.sort((destination1, destination2) => {
      if (destination1.destination < destination2.destination) {
        return -1
      } else {
        return 1
      }
    })
    sortedDestinations.forEach(destination => {
      let destinationOption = `
      <option value='${destination.id}'>${destination.destination}</option
      `;
      destinationSelector.insertAdjacentHTML('beforeend', destinationOption);
    })
  },
  showWelcomeUser(singleUser) {
    let firstName = singleUser.name.split(' ');
    let welcome = document.querySelector('.welcome');
    welcome.innerText = `Welcome, ${firstName[0]}!`;
    },
  showTravelerExpensesYTD(today){
    const annualTravelExpenses = this.traveler.getTotalSpentThisYear(this.destinations, today);
    let totalAmtSpent = document.querySelector('.total-spent')
    totalAmtSpent.innerText = ` $${annualTravelExpenses}`
  },

  sortTripsByDate() {
    this.traveler.allTrips.sort((trip1, trip2) => {
      return new Date(trip1.date) - new Date(trip2.date)
    })
  },

  displayTrips() {
    let tripsArea = document.querySelector('.trips-area');
    tripsArea.innerHTML = '';
    this.traveler.allTrips.forEach(trip => {
      let destination = this.destinations.find(destination => {
        return trip.destinationID === destination.id
      })
      let tripCard = `
      <article class='trip-card' id='${trip.id}'>
        <h4>${destination.destination}</h4>
        <img src="${destination.image}" alt="${destination.alt}" class="trip-image">
          <p>Departure: ${trip.date}</p>
          <p>Days: ${trip.duration}</p>
          <p>Travelers: ${trip.travelers}</p>
          <p>Trip Status: ${trip.status}</p>
      </article>
      `
      tripsArea.insertAdjacentHTML('afterBegin', tripCard);
    })
  },
  displayTripCost(estimatedTripCost) {
    let button = document.getElementById('estimated-cost-btn');
    let displayCostHTML = `
      <div id="trip-cost-display">
      <h4>Estimated Trip Cost: $${estimatedTripCost} (10% agent fee included)</h4>
    `
    button.classList.add('hidden')
    button.insertAdjacentHTML('beforebegin', displayCostHTML)
    let submitButton = document.querySelector('.submit-btn');
    submitButton.classList.remove('hidden')
  }
}

export default domUpdates;
