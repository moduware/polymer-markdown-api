const methodFormatter = require('../js/method-formatter');
const chai = require('chai');
const expect = chai.expect;

describe('methodFormatter', function() {
  let methodsMap = new Map();
  
  methodsMap.set('colorAssigned', 
    {
      name: 'colorAssigned',
      type: 'Function',
      description: 'function will fire a console.warn message',
      params: [{
        name: 'oldValue',
        type: '[any]',
        defaultValue: undefined,
        rest: undefined,
        description: 'old value of color property'
      },
      {
        name: 'newValue',
        type: 'any',
        defaultValue: undefined,
        rest: undefined,
        description: 'new value of color property'
      }]
    });

  let morphButton = {
    methods: methodsMap,
  };
  
  it('formats methods inside element', function() {
    let result = methodFormatter(morphButton)

    expect(result).to.include('## Methods');
    expect(result).to.include('**colorAssigned(oldValue, newValue)**');
    expect(result).to.include('function will fire a console.warn message');
  });
});