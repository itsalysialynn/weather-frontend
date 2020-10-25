const convertKalvinToCelsius = (kalvinTemp) => {
  const celsiusTemp = kalvinTemp - 273.1;
  return Math.round(celsiusTemp);
};

export default convertKalvinToCelsius;
