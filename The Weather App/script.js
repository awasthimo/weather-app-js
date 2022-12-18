/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
  const fullURL=`${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
return  fetch(fullURL).
  then((response)=>{
    return response.json();
})
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  
  // CODE GOES HERE
getWeatherData(city).then((data)=>{
  showWeatherData(data);
console.log(data);
}).catch((error)=>{
  console.log("error");
  console.log(error);
})

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
document.getElementById('city-name').innerText=weatherData.name;
if(weatherData.name){
document.getElementById('weather-type').innerText=weatherData.weather[0].main;
document.getElementById('temp').innerText=convertToCelsius(weatherData.main.temp).toFixed(2);
document.getElementById('min-temp').innerText=convertToCelsius(weatherData.main.temp_min).toFixed(2);
document.getElementById('max-temp').innerText=convertToCelsius(weatherData.main.temp_max).toFixed(2);
}else{
  document.getElementById('city-name').innerText="City not found";
}
}

function convertToCelsius(fahrenheit){
return ((fahrenheit-32)*5)/9;
}