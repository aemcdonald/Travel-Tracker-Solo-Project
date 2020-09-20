const domUpdates = {
  allUsers: null,
  traveler: null,
  trips: null,
  destinations: null,
  // today: null,

  getData(allUsers, singleUser, allTripData, allDestinationData, date) {
    this.allUsers = allUsers;
    this.traveler = singleUser;
    this.trips = allTripData;
    this.destinations = allDestinationData;
    // this.today = date
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
      <option value='${destination.destination}' id='$destination.id'>${destination.destination}</option
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
    totalAmtSpent.innerText = `$${annualTravelExpenses}`
  },

  sortTripsByDate() {
    let sortedTrips = this.traveler.allTrips.sort((trip1, trip2) => {
      return new Date(trip1.date) - new Date(trip2.date)
    })
    return sortedTrips
  },

  displayTrips() {
    let sortedTrips = this.sortTripsByDate()
    console.log(sortedTrips)
    let tripsArea = document.querySelector('.trips-area');
    console.log(this.destinations)
    sortedTrips.forEach(trip => {
      let destination = this.destinations.find(destination => {
        return trip.destinationID === destination.id
      })
      let tripCard = `
      <article class='trip' id='${trip.id}'>
        <h4>${destination.destination}</h4>
        <img src="${destination.image}" alt="${destination.alt}" class="trip-image">
          <p>Departure: ${trip.date}</p>
          <p>Days: ${trip.duration}</p>
          <p>Travelers:${trip.travelers}</p>
          <p>Status:${trip.status}</p>
      </article>
      `
      tripsArea.insertAdjacentHTML('afterBegin', tripCard);
    })
  }
}

export default domUpdates;
