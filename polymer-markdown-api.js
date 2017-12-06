#! /usr/bin/env node

const {Analyzer, FSUrlLoader} = require('polymer-analyzer');

const baseUrl = process.cwd();
var markdown = "";

var myArgs = process.argv.slice(2); // strip 2 default args we don't need
var myFile = myArgs[0];

let analyzer = new Analyzer({
  urlLoader: new FSUrlLoader(baseUrl),
});

// This is the top part of our md file
console.log(`# This is Markdown Generator\n`);
console.log(`The baseURL is ${baseUrl}`);
console.log(`and file pass in is <${myFile}>\n`);

if (myFile) {
  analyzer.analyze([myFile]).then((analysis) => {
    const [MorphButton, ] = analysis.getFeatures(
        {kind: 'element', id: 'morph-button', externalPackages: true});
    
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

  for (const [name, property] of element.methods) {
    markdown += `**${property.name}**: _${property.type}_ ${typeof (property.default) == 'undefined' ? '' : ' = \`\`' + property.default + '\`\`'}\n\n${property.description}\n\n`;
  }
}
