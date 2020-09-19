class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.allTrips = [];
    this.pastTrips = [];
    this.presentTrips = [];
    this.currentTrip = [];
    this.upcomingTrips = []
  }
  getAllTrips(tripsData) {
    tripsData.forEach(trip => {
      if (trip.userID === this.id) {
        this.allTrips.push(trip);
      }
    })
  }
  getPastTrips(date) {
    this.allTrips.forEach(trip => {
        if (trip.date < date) {
        this.pastTrips.push(trip)
      }
    })
  }
}

module.exports = Traveler;
