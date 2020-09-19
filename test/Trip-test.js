import { expect } from 'chai';
import trips from './trips-data.js';
import destinations from './destinations-data.js';
import Trip from '../src/Trip.js';
import Traveler from '../src/Trip.js'

describe('Trip', () => {
  let trip, trip1;
  let traveler;

  beforeEach(() => {
    trip = new Trip(trips[0])
    trip1 = new Trip(trips[1])
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of a trip', () => {
    expect(trip).to.be.an.instanceof(Trip);
  });

  describe('Trip Properties', () => {
    it('should have an id', () => {
      expect(trip.id).to.equal(1);
    });

    it('Should have a traveler id to associate with a traveler', () => {
      expect(trip.userID).to.equal(44)
    });

    it('Should have a destination id', () => {
      expect(trip.destinationID).to.equal(49);
    });

    it('Should have a number of travelers for a booking', () => {
      expect(trip.travelers).to.equal(1);
      expect(trip1.travelers).to.equal(5);
    });

    //default number of travelers of 1??

    it('Should have a date for a booking', () => {
      expect(trip.date).to.equal('2019/09/16');
    });

    



  });
});
