function createStringOfArgumentNames(argumentsArray) {
  let argumentNames = [];
  for (let argument of argumentsArray) {
    argumentNames.push(argument.name);
  }
  let argumentsString = argumentNames.join(', ');
  return argumentsString;
}

module.exports = createStringOfArgumentNames;