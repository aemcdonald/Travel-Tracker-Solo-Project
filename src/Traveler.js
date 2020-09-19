import moment from 'moment';

class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.allTrips = [];
    this.pastTrips = [];
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
  getPastTrips(currentDate) {
    this.allTrips.forEach(trip => {
        if (trip.date < currentDate) {
        this.pastTrips.push(trip)
      }
    })
  }
  getCurrentTrip(currentDate) {
    this.allTrips.forEach(trip => {
      if (currentDate >= trip.date && currentDate <= moment(new Date(trip.date)).add(trip.duration, 'days').format('YYYY/MM/DD')) {
        this.currentTrip.push(trip);
      }
    })
  }
}

export default Traveler;
