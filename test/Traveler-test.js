import { expect } from 'chai';

import travelers from './travelers-data.js';
import trips from './trips-data.js';
import Traveler from '../src/Traveler.js';

describe('Traveler', () => {
  let todaysDate;

  beforeEach(() => {

    todaysDate = "2020/09/18";
  });

  it('should be a function', () => {
    expect (Traveler).to.be.a('function');
  });
});
