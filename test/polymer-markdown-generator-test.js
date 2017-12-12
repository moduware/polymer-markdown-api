const expect = require('chai').expect;
var generator = require('../polymer-markdown-generator.js');

describe('Polymer Markdown Generator', function() {
  context('methodFormatter', function() {
    it('test for method formatter output', function() {
      var arr = [];
      
      expect(arr.length).to.equal(0);
    });

    it('should have a methodFormatter Method', function() {
      expect(typeof generator).to.be.equal('object');
      expect(typeof generator._methodFormatter).to.be.equal('function');
    });
  });
  
  context('propertyFormatter', function() {
    it('should have a propertyFormatter Method', function() {
      expect(typeof generator).to.be.equal('object');
      expect(typeof generator._propertyFormatter).to.be.equal('function');
    });
  });

  context('createStringOfArguments', function(){
    it('should have a createStringOfArgumentNames Method', function () {
      expect(typeof generator).to.be.equal('object');
      expect(typeof generator._createStringOfArgumentNames).to.be.equal('function');
    });

    it('takes an array and returns comma seperated string of names');
  });
});