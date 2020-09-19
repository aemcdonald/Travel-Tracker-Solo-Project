import { expect } from 'chai';
import travelers from './travelers-data.js';
import trips from './trips-data.js';
import Traveler from '../src/Traveler.js';

describe('Traveler', () => {
  let traveler1, traveler2, traveler3;

  beforeEach(() => {
    traveler1 = new Traveler(travelers[0]);
    traveler2 = new Traveler(travelers[1]);
    traveler3 = new Traveler(travelers[2]);
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler1).to.be.an.instanceOf(Traveler);
  });

  describe('Traveler Properties', () => {

    it('should store a traveler\'s id', () => {
      expect(traveler1.id).to.equal(1);
    });

    it('should store a traveler\'s name', () => {
      expect(traveler1.name).to.equal('Ham Leadbeater');
    });

    it('should store a different traveler\'s name', () => {
      expect(traveler2.name).to.equal('Rachael Vaughten');
    });

    it('should store a traveler type', () => {
      expect(traveler1.travelerType).to.equal('relaxer');
    });
  })

  describe('Traveler Methods', () => {

    it('should start with no past trips', () => {
      expect(traveler1.pastTrips).to.deep.equal([]);
    });

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
  })
});
