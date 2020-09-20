const domUpdates = {
  allUsers: null,
  traveler: null,
  trips: null,
  destinations: null,

  getData(allUsers, singleUser, allTripData, allDestinationData) {
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
      <option value='${destination.destination}' id='$destination.id'>${destination.destination}</option
      `;
      destinationSelector.insertAdjacentHTML('beforeend', destinationOption);
    })
  }
}

export default domUpdates;
