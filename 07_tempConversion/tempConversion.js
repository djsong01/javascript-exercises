const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp-32)*(5/9)
  if(cTemp === 0){
    return cTemp;
  }
  else{
    return parseFloat(cTemp.toFixed(1));
  }
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = (cTemp * (9/5)) + 32
  if(fTemp === 0){
    return fTemp;
  }
  else{
    return parseFloat(fTemp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
