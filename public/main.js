let weather = document.querySelector('.weather-conditions')

const addCondition = (parent, className, word) => {
  let _newLi = document.createElement('li')
  _newLi.classList.add(className)
  _newLi.textContent = word
  parent.appendChild(_newLi)
}
// const conditions = (humidity, temp, weth, usa) => {
// let humidityLI = document.createElement('li')
// humidityLI.textContent = `Humidity: ${humidity}%`
// weather.appendChild(humidityLI)
// let tempLI = document.createElement('li')
// tempLI.textContent = `Temperature: ${temp} F`
// weather.appendChild(tempLI)
// let rainLI = document.createElement('li')
// rainLI.textContent = `Cloud Conditions: ${weth}`
// weather.appendChild(rainLI)
// let countryLI = document.createElement('li')
// countryLI.textContent = `Country: ${usa}`
// weather.appendChild(countryLI)
// }
const main = () => {
  let button = document.querySelector('.search-button')
  let searchInput = document.querySelector('.search')
  button.addEventListener('click', event => {
    let searchInputValue = searchInput.value
    console.log(searchInputValue)
    let url
    if (isNaN(parseInt(searchInputValue))) {
      url = ('http://api.openweathermap.org/data/2.5/weather?q=' + `${searchInputValue}` + '&units=imperial&appid=b1e7918a1ab5e32426948269440f8781')
    } else {
      url = ('http://api.openweathermap.org/data/2.5/weather?zip=' + `${searchInputValue}` + '&units=imperial&appid=b1e7918a1ab5e32426948269440f8781')
    }
    fetch(url)
      .then(
        response => {
          return response.json()
        }
      )
      .then(
        json => {
          weather.textContent = ''

          const parent = document.querySelector('.weather-conditions')
          addCondition(parent, 'humidity', json.main.humidity)
          addCondition(parent, 'temp', json.main.temp)
          addCondition(parent, 'description', json.weather[0].description)
          addCondition(parent, 'country', json.sys.country)
          const otherParent = document.querySelector('.other-bits')
          addCondition(otherParent, 'humidity', json.main.humidity)
          addCondition(otherParent, 'temp', json.main.temp)
          addCondition(otherParent, 'description', json.weather[0].description)
          addCondition(otherParent, 'country', json.sys.country)
          console.log(json)
        }
      )
  })
}

document.addEventListener('DOMContentLoaded', main)
