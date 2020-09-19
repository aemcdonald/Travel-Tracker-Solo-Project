class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.pastTrips = [];
    this.presentTrips = [];
    this.currentTrip = [];
    this.upcomingTrips = []
  }
}

module.exports = Traveler;
