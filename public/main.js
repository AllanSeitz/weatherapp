


// 'Wait for user to click on to go button
// - then
//   '- get the dom element where the input is


//   - 'get the value in the dom input
//   - use that to fill in the API where the city name goes
//   - Make an api request
//   - When that comes back
//     - fetch the temperature
//     - add the temperature to the dom
//     - fetch the ....
//
//
//
//
//
//
//   - tiny step
//   - tiny step
//   - tiny step


//for each loop referencing tempature for a city
//forEach loop referencing the wind speed for a city
//a forEach loop referencing percipitation for a city

//for each loop referencing tempature for a zip
//forEach loop referencing the wind speed for a zip
//a forEach loop referencing percipitation for a zip
let weather = document.querySelector('.weather-conditions')

const conditions = (humidity, temp, weth, usa) => {

  let humidityLI = document.createElement('li')
  humidityLI.textContent = `Humidity: ${humidity}%`
  weather.appendChild(humidityLI)

  let tempLI = document.createElement('li')
  tempLI.textContent = `Temperature: ${temp} F`
  weather.appendChild(tempLI)

  let rainLI = document.createElement('li')
  rainLI.textContent = `Cloud Conditions: ${weth}`
  weather.appendChild(rainLI)

  let countryLI = document.createElement('li')
  countryLI.textContent = `Country: ${usa}`
  weather.appendChild(countryLI)
}




const main = () => {
  let button = document.querySelector('.search-button')
  let searchInput = document.querySelector('.search')

  button.addEventListener('click', event => {
    let searchInputValue = searchInput.value
    console.log(searchInputValue)

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + `${searchInputValue}` + '&units=imperial&appid=b1e7918a1ab5e32426948269440f8781')
      .then(
        response => {
          return response.json()
        }
      ).then(
        json => {
          const humidity = json.main.humidity
          const temp = json.main.temp
          const usa = json.sys.country
          const weth = json.weather[0].description
          weather.textContent = ''
          conditions(humidity, temp, weth, usa)
          console.log(json)
        }
      )
  })
}




document.addEventListener('DOMContentLoaded', main)
