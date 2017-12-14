const expect = require('chai').expect;
const generator = require('../polymer-markdown-generator.js');
const exec = require('child_process').exec;

let errorWhenNoFilePass = "Single file to process must be specified";
let errotWhenFileDoesNotContainElement = 'File don\'t define or import somefile.';

describe('Polymer Markdown Generator', function() {
  
  context('when no file is given', function () {
    let outputString;
    before(function(done) {
      const child = exec('node polymer-markdown-generator.js', function (err, stdout, stderr) {
        outputString = stdout.replace(/(\r\n|\n|\r)/gm, "");
        done();
      });
    });
  
    it('should have error when no file is passed to parse', function () {
      expect(outputString).to.equal(errorWhenNoFilePass);
    });
  });

  context('when file passed has no polymer element', function () {
    let outputString;
    before(function (done) {
      const child = exec('node polymer-markdown-generator.js somefile.html', function (err, stdout, stderr) {
        outputString = stdout.replace(/(\r\n|\n|\r)/gm, ""); // strip \n character and leave only text
        done();
      });

    });

    it('should have error when the file passed does not contain the kind: element', function () {
      expect(outputString).to.be.a('string').that.includes(errotWhenFileDoesNotContainElement);
    });
  });

  context('When passed in a valid file', function() {
    let outputString;
    before(function(done) {
      exec('node polymer-markdown-generator.js ../polymer-markdown-generator/test/data/morph-button.html', function (err, stdout, stderr) {
        outputString = stdout;
        // outputString = stdout.replace(/(\r\n|\n|\r)/gm, "");
        done();
      });
    });

    it('should save the markdown to REFERENCE.md by default when no output file is passed', function() {
      expect(outputString).to.be.a('string').that.includes('REFERENCE.md');
    });
  });
  
  context('When flag --output-file is passed', function() {
    let outputString;
    before(function(done) {
      exec('node polymer-markdown-generator.js ../polymer-markdown-generator/test/data/morph-button.html --output-file INFO.md', function (err, stdout, stderr) {
        outputString = stdout;
        done();
      });
    });
    
    it('should save the file to the file name passed and not the default REFRENCE.md', function () {
      expect(outputString).to.be.a('string').that.includes('INFO.md');
      expect(outputString).to.not.include('REFERENCE.md');
    });
  });

  context('When flag --output-file is passed but not argument to go with it', function() {
    let outputString;
    before(function (done) {
      exec('node polymer-markdown-generator.js ../polymer-markdown-generator/test/data/morph-button.html --output-file', function (err, stdout, stderr) {
        outputString = stderr;
        done();
      });
    });

    it('should save the file to the file name passed and not the default REFRENCE.md', function () {
      expect(outputString).to.not.include('REFERENCE.md');
      expect(outputString).to.include("error: option `-o, --output-file <file>' argument missing");
    });

  });
  context.skip('should processed --flags correctly');
});