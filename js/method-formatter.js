const createStringOfArgumentNames = require('./create-string-of-argument-names');

function methodFormatter(element) {
  let markdown = '';
  markdown += '## Methods\n\n';
  let methods = element[Object.getOwnPropertyNames(element)[3]];
  console.log('element', methods.entries());
  
  for (const [name, method] of element.methods) {
    let argumentNames = createStringOfArgumentNames(method.params);

    markdown += `**${method.name}(${argumentNames})**: ${typeof (method.return) == 'undefined' ? '' : ' = \`\`' + method.return.type + '\`\`'} \n\n${method.description}\n\n\n`;
  }
  return markdown;
}

module.exports = methodFormatter;