class Trip {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID; //49
    this.travelers = trip.travelers || 1;
    this.date = trip.date;
    this.duration = trip.duration || 1;
    this.status = trip.status; //how do I create default status of 'pending' for new trips?
    // this.suggestedActivities = []; //will I use this??
  }
  calculateTripCost(destinationData) {
    let tripFound = destinationData.find(destination => {
      return destination.id === this.destinationID;
    })
    let lodgingCost = tripFound.estimatedLodgingCostPerDay * this.duration;
    let flightCost = tripFound.estimatedFlightCostPerPerson * this.travelers;
    let travelAgentFee = (lodgingCost + flightCost) * .10;
    let totalTripCost = lodgingCost + flightCost + travelAgentFee;
    return totalTripCost;
  }
}

export default Trip;
