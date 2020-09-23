import { expect } from 'chai';
import tripData from './trips-data.js';
import destinationData from './destinations-data.js';
import Trip from '../src/Trip.js';
import Traveler from '../src/Trip.js'

describe('Trip', () => {
  let trip, trip1;
  let traveler;
  beforeEach(() => {
    trip = new Trip(tripData[0])
    trip1 = new Trip(tripData[1])
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
    it('Should have a date for a booking', () => {
      expect(trip.date).to.equal('2019/09/16');
    });

    it('Should have a duration for a booking', () => {
      expect(trip.duration).to.equal(8);
    });

    it('Should be able to have a status of approved', () => {
      expect(trip.status).to.equal('approved');
    });

    it('Should be able to have a status of pending', () => {
      expect(trip1.status).to.equal('pending');
    });

    it('Should calculate the cost of a trip', () => {
      expect(trip.calculateTripCost(destinationData)).to.equal(5819);
      expect(trip1.calculateTripCost(destinationData)).to.equal(4565);
    });
  });
});
