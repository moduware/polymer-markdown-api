const createStringOfArgumentNames = require('./create-string-of-argument-names');


/**
 * methodFormatter - Formats the methods of the element.
 *
 * @param  {Object} element element that we are trying to create documentation for
 * @return {String}         created marked down
 */
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
