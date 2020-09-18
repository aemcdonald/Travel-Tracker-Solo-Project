import { expect } from 'chai';
import destinations from './destinations-data.js';
import Destination from '../src/Destination.js';

describe('Destination', () => {
  let destination;

  beforeEach(() => {
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });
});
