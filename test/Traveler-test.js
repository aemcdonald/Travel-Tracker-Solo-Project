import { expect } from 'chai';
import travelers from './travelers-data.js';
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
  })
});
