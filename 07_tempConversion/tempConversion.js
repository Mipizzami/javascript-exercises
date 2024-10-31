const convertToCelsius = function(Fahr) {
  let Cels = (Fahr - 32) * (5/9);
  const rounded = Math.round(Cels *10) / 10;
  return rounded;
};

const convertToFahrenheit = function(Cels) {
  let Fahr = (Cels * (9/5) + 32);
  const rounded = Math.round(Fahr * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
