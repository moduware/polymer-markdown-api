const createStringOfArgumentNames = require('../js/create-string-of-argument-names');
const expect = require('chai').expect;

describe('createStringOfArgumentNames', function () {
  it('recieves an array of objects and name as keys, and output string of all name values', function () {
    let argumentsArray = [{ name: 'oldValue' }, { name: 'newValue' }, { name: 'colorValue' }];

    expect(createStringOfArgumentNames(argumentsArray)).to.equal('oldValue, newValue, colorValue');
  });
});