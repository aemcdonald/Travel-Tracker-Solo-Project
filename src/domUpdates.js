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
  }
}

export default domUpdates;
