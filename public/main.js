


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

const conditions = (humidity, temp) => {

  let weather = document.querySelector('.weather-conditions')
  let conditionsLI = document.createElement('li')
  conditionsLI.textContent = `humidity ${humidity} % ${temp}`
  weather.appendChild(conditionsLI)
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
          conditions(humidity, temp)
          console.log(json)
        }
      )
  })
}




document.addEventListener('DOMContentLoaded', main)
