import { expect } from 'chai';
import travelers from './travelers-data.js';
import Traveler from '../src/Traveler.js';

describe('Traveler', () => {
  let traveler;

  beforeEach(() => {
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });
});
