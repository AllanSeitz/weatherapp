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
      )
      .then(
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
