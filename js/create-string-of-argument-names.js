
/**
 * createStringOfArgumentNames - Converts arguments' name to a string.
 *
 * @param  {Array} argumentsArray array of arguments
 * @return {String}               returns to string of argument names
 */
function createStringOfArgumentNames(argumentsArray) {
  let argumentNames = [];
  for (let argument of argumentsArray) {
    argumentNames.push(argument.name);
  }
  let argumentsString = argumentNames.join(', ');
  return argumentsString;
}

module.exports = createStringOfArgumentNames;
