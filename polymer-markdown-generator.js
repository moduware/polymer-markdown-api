#! /usr/bin/env node
const VERSION = '1.0.0';
const {Analyzer, FSUrlLoader} = require('polymer-analyzer');
const program = require('commander');
const fs = require('fs');
const methodFormatter = require('./js/method-formatter');
const propertyFormatter = require('./js/property-formatter');

const baseUrl = process.cwd();

program
.version(VERSION)
.usage('[options] <file>')
.option('-e, --element-name <name>', 'Element tag name if different from filename')
.option('-o, --output-file <file>', 'Filename to save result')
.parse(process.argv);

if (program.args.length != 1) {
  console.log('Single file to process must be specified');
  return;
}

const targetFile = program.args[0]; // this gets the file argument to be parse
const targetFileBaseName = targetFile.replace(/^.*[\\\/]/, '');
const targetFileDir = targetFile.replace(targetFileBaseName, '');
const elementId = program.elementName || targetFileBaseName.substr(0, targetFileBaseName.lastIndexOf('.'));
const outputName = program.outputFile || 'REFERENCE.md'; // default filename if no output file is passed

console.log(`Markdown Generator ${VERSION}\n`); // This is the top part of our md file
console.log(`Processing <${targetFile}>\n`);

const analyzer = new Analyzer({
  urlLoader: new FSUrlLoader(targetFileDir),
});

analyzer.analyze([targetFileBaseName]).then((analysis) => {
  let markdownOutput = '';
  const [ElementClass, ] = analysis.getFeatures(
    { kind: 'element', id: elementId, externalPackages: true});
  
  if (!ElementClass) {
    console.log(`File don't define or import ${elementId}.`);
    return; // if no element found with id = elementId it will exit
  }

  markdownOutput += propertyFormatter(ElementClass); // adds property markdown to output
  markdownOutput += methodFormatter(ElementClass); // adds method markdown to output
  fs.writeFileSync(outputName, markdownOutput); // writes to file the markdown output
  console.log(`Markdown saved to ${outputName}.`);
});
