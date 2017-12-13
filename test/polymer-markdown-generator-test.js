const expect = require('chai').expect;
const generator = require('../polymer-markdown-generator.js');
const exec = require('child_process').exec;

let outputString;
let errorWhenNoFilePass = "Single file to process must be specified";


// console.log('generator', generator);

describe('Polymer Markdown Generator', function() {
  before(function(done) {
    const child = exec('node polymer-markdown-generator.js', function (err, stdout, stderr) {
      console.log('stdout', stdout);
      outputString = stdout = stdout.replace(/(\r\n|\n|\r)/gm, "");;
      done();
    });
  });

  // ToDo: add a kind of test that test the input and output of the CLI application
  it('should have error when no file is passed to parse', function () {
    expect(outputString).to.equal(errorWhenNoFilePass);
  });
  
  it('should have a correct file is save');
  it('should processed --flags correctly');
});