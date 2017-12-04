const {Analyzer, FSUrlLoader} = require('polymer-analyzer');
var markdown = "";

let analyzer = new Analyzer({
  urlLoader: new FSUrlLoader('/Users/Clint/Projects/moduware/morph-button'),
});

// This path is relative to the package root
analyzer.analyze(['./morph-button.html']).then((analysis) => {
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

function propertyFormatter(element) {
  markdown += "## Properties\n";
  for (const [name, property] of element.properties) {
    markdown += `**${property.name}**: _${property.type}_ ${typeof (property.default) == 'undefined' ? '' : ' = \`\`' + property.default + '\`\`'}\n\n
      ${property.description}\n\n\n `;
  }
}
