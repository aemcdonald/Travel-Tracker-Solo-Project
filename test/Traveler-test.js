import { expect } from 'chai';
import travelers from './travelers-data.js';
import tripsData from './trips-data.js';
import destinationData from './destinations-data.js';
import Traveler from '../src/Traveler.js';
import Trip from '../src/Trip.js';

describe('Traveler', () => {
  let traveler1, traveler2, traveler3;
  let trips;

  beforeEach(() => {
    traveler1 = new Traveler(travelers[0]);
    traveler2 = new Traveler(travelers[1]);
    traveler3 = new Traveler(travelers[2]);
    trips = tripsData.map(trip => {
      return new Trip(trip)
    })
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler1).to.be.an.instanceOf(Traveler);
  });

  describe('Traveler Properties', () => {

    it('should have an id', () => {
      expect(traveler1.id).to.equal(1);
    });

    it('should have a name', () => {
      expect(traveler1.name).to.equal('Ham Leadbeater');
    });

    it('should be able to store a different traveler\'s name', () => {
      expect(traveler2.name).to.equal('Rachael Vaughten');
    });

    it('should have different traveler types', () => {
      expect(traveler1.travelerType).to.equal('relaxer');
      expect(traveler2.travelerType).to.equal('thrill-seeker');
    });

    it('should start with no past trips', () => {
      expect(traveler1.pastTrips).to.deep.equal([]);
    });

    it('should start with no current trips', () => {
      expect(traveler1.pastTrips).to.deep.equal([]);
    });

    it('should start with no upcoming trips', () => {
      expect(traveler1.pastTrips).to.deep.equal([]);
    });

    it('should start with no pending trips', () => {
      expect(traveler1.pastTrips).to.deep.equal([]);
    });
  })

  describe('Traveler Methods', () => {

    it('should get all trips for a traveler', () => {
      traveler1.getAllTrips(trips);
      traveler2.getAllTrips(trips);
      traveler3.getAllTrips(trips);
      expect(traveler1.allTrips.length).to.equal(1);
      expect(traveler2.allTrips.length).to.equal(6);
      expect(traveler3.allTrips.length).to.equal(7);
    });

    it('should get past trips for a traveler', () => {
      traveler2.getAllTrips(trips);
      traveler2.getPastTrips("2020/09/18");
      expect(traveler2.pastTrips.length).to.equal(4);
      traveler3.getAllTrips(trips);
      traveler3.getPastTrips("2020/09/18");
      expect(traveler3.pastTrips.length).to.equal(5);
    });

    it('should get the current trip for a user', () => {
      traveler1.getAllTrips(trips);
      traveler1.getCurrentTrip("2021/01/10");
      expect(traveler1.currentTrip.length).to.equal(1);
      traveler2.getAllTrips(trips);
      traveler2.getCurrentTrip("2020/03/06");
      expect(traveler2.currentTrip.length).to.equal(1);
    });

    it('should not return a trip if a user is not on a trip', () => {
      traveler1.getAllTrips(trips);
      traveler1.getCurrentTrip("2020/09/18");
      expect(traveler1.currentTrip.length).to.equal(0);
    });

    it('should return a user\'s future trips', () => {
      traveler1.getAllTrips(trips);
      traveler1.getUpcomingTrips("2020/09/18");
      expect(traveler1.upcomingTrips.length).to.equal(1);
      traveler3.getAllTrips(trips);
      traveler3.getUpcomingTrips("2020/09/18");
      expect(traveler3.upcomingTrips.length).to.equal(1);
    });

    it('should not return a trip if a user is not on a trip', () => {
      traveler1.getAllTrips(trips);
      traveler1.getCurrentTrip("2020/09/18");
      expect(traveler1.currentTrip.length).to.equal(0);
    });

    it('should return pending trips for a user', () => {
      traveler1.getAllTrips(trips);
      traveler1.sortPendingTrips();
      expect(traveler1.pendingTrips.length).to.equal(0);
      traveler2.getAllTrips(trips);
      traveler2.sortPendingTrips();
      expect(traveler2.pendingTrips.length).to.equal(1);
    });

    it('Should calculate the total amount spent on trips this year', () => {
      let trip = new Trip(trips[0])
      traveler2.getAllTrips(trips);
      traveler3.getAllTrips(trips);
      expect(traveler2.getTotalSpentThisYear(destinationData, "2020/09/19")).to.equal(6917.9);
      expect(traveler3.getTotalSpentThisYear(destinationData, "2020/09/19")).to.equal(32670);
    });
  });
});
