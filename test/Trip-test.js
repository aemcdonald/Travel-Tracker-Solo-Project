import { expect } from 'chai';
import trips from './trips-data.js';
import Trip from '../src/Trip.js';

describe('Trip', () => {
  let trip;

  beforeEach(() => {
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });
});
