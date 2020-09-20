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
  }
}

export default domUpdates;
