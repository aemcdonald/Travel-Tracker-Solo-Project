import { expect } from 'chai';
import trips from './trips-data.js';
import Trip from '../src/Trip.js';
import Traveler from '../src/Trip.js'

describe('Trip', () => {
  let trip;

  beforeEach(() => {
    trip = new Trip(trips[0])
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of a trip', () => {
    expect(trip).to.be.an.instanceof(Trip);
  });
});
