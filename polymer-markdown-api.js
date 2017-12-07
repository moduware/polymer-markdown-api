#! /usr/bin/env node

const {Analyzer, FSUrlLoader} = require('polymer-analyzer');
const program = require('commander');

const baseUrl = process.cwd(); // gets the path of the current directory

const myArgs = process.argv.slice(2); // strip 2 default args we don't need
const myFile = myArgs[0]; // gets first argument pass in the command line
const elementId = myFile.substr(0, myFile.lastIndexOf('.')) || myFile; // strip the filename of file extension

const analyzer = new Analyzer({
  urlLoader: new FSUrlLoader(baseUrl),
});

var markdown = "";

program
  .version('1.0.0')
  .usage('[options] <file>')
  .option('-e, --element-name <name>', 'Element tag name if different from filename')
  .option('-o, --output-file <file>', 'Filename to save result')
  .parse(process.argv);


console.log('--element-name', program.elementName);
console.log('--output-file', program.outputFile);
console.log('filename', program.args[0]);

return;

// This is the top part of our md file
console.log(`# This is Markdown Generator\n`);
console.log(`The baseURL is ${baseUrl}`);
console.log(`and file pass in is <${myFile}>\n`);

if (myFile) {
  analyzer.analyze([myFile]).then((analysis) => {
    const [MorphButton, ] = analysis.getFeatures(
      { kind: 'element', id: elementId, externalPackages: true});
    
    if (MorphButton) {
      propertyFormatter(MorphButton);
    } else {
      console.log(`File don't define or import morph-button.`);
    }
    console.log(markdown);
    
  });
} else {
  console.log('Please pass in a filename of your polymer element');
}

function propertyFormatter(element) {
  markdown += "## Properties\n\n";

  for (const [name, property] of element.properties) {
    markdown += `**${property.name}**: _${property.type}_ ${typeof (property.default) == 'undefined' ? '' : ' = \`\`' + property.default + '\`\`'}\n\n${property.description}\n\n`;
  }
}
