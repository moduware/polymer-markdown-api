/**
 * propertyFormatter - Formats the properties of the element.
 *
 * @param  {Object} element element that we are trying to create documentation for
 * @return {String}         created marked down
 */
function propertyFormatter(element) {
  let markdown = '';
  markdown += '## Properties\n\n';

  for (const [name, property] of element.properties) {
    markdown += `**${property.name}**: _${property.type}_ ${typeof (property.default) == 'undefined' ? '' : ' = \`\`' + property.default + '\`\`'}\n\n${property.description}\n\n`;
  }
  return markdown;
}

module.exports = propertyFormatter;
