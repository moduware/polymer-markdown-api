const createStringOfArgumentNames = require('./create-string-of-argument-names');

function methodFormatter(element) {
  let markdown = '';
  markdown += '## Methods\n\n';

  for (const [name, method] of element.methods) {
    let argumentNames = createStringOfArgumentNames(method.params);

    markdown += `**${method.name}(${argumentNames})**: ${typeof (method.return) == 'undefined' ? '' : ' = \`\`' + method.return.type + '\`\`'} \n\n${method.description}\n\n\n`;
  }
  return markdown;
}

module.exports = methodFormatter;