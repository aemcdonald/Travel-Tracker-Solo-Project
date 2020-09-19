class Trip {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.numTravelers = trip.numTravelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = []; //will I use this??
  }
}

export default Trip;
