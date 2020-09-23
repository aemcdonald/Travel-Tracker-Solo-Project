import moment from 'moment';

class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.allTrips = [];
    this.pastTrips = [];
    this.currentTrip = [];
    this.upcomingTrips = [];
    this.pendingTrips = [];
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
      if (trip.date < currentDate && trip.status === 'approved') {
        this.pastTrips.push(trip)
      }
    })
    return this.pastTrips;
  }
  getCurrentTrip(currentDate) {
    this.allTrips.forEach(trip => {
      if (currentDate >= trip.date && currentDate <= moment(new Date(trip.date)).add(trip.duration, 'days').format('YYYY/MM/DD') && trip.status === 'approved') {
        this.currentTrip.push(trip);
      }
    })
    return this.currentTrip;
  }
  getUpcomingTrips(currentDate) {
    this.allTrips.forEach(trip => {
      if (trip.date > currentDate && trip.status === 'approved') {
        this.upcomingTrips.push(trip);
      }
    })
    return this.upcomingTrips;
  }
  sortPendingTrips() {
    this.allTrips.forEach(trip => {
      if (trip.status === 'pending') {
        this.pendingTrips.push(trip);
      }
    })
    return this.pendingTrips;
  }
  getTotalSpentThisYear(destinationData, currentDate) {
    let tripsThisYear = this.allTrips.filter(trip => {
      return (trip.date.includes('2020') && trip.date < currentDate)
    })
    let total = 0;
    tripsThisYear.forEach(trip => {
      total += trip.calculateTripCost(destinationData);
    })
    return total;
  }
}

export default Traveler;
