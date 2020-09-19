class Trip {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.travelers = trip.travelers || 1;
    this.date = trip.date;
    this.duration = trip.duration || 1;
    this.status = trip.status; //how do I create default status of 'pending' for new trips?
    // this.suggestedActivities = []; //will I use this??
  }
}

export default Trip;
