const {Analyzer, FSUrlLoader} = require('polymer-analyzer');

const myFile = process.argv[2];
const baseUrl = process.cwd();
var markdown = "";

let analyzer = new Analyzer({
  urlLoader: new FSUrlLoader(baseUrl),
});
// This path is relative to the package root

if (process.argv[2]) {
  analyzer.analyze([myFile]).then((analysis) => {
    // Print the name of every property on paper-button, and where it was
    // inherited from.
  
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
  markdown += "## Properties\n";
  for (const [name, property] of element.properties) {
    markdown += `**${property.name}**: _${property.type}_ ${typeof (property.default) == 'undefined' ? '' : ' = \`\`' + property.default + '\`\`'}\n\n
      ${property.description}\n\n\n `;
  }
}

exports.printMsg = function() {
  console.log('This is from polymer-markdown-api');
}