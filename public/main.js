//define the class
//define the constructor
//define the this
//make my function
//call my function



let weather = document.querySelector('.weather-conditions')

class WeatherAPI {
  constructor(parentSelector) {
    this.parent = document.querySelector(parentSelector)
  }

  addCondition(text1, text) {
    let _newLi = document.createElement('li')
    _newLi.textContent = text1 + text
    this.parent.appendChild(_newLi)
  }
}
const main = () => {
  let button = document.querySelector('.search-button')
  let searchInput = document.querySelector('.search')
  button.addEventListener('click', event => {
    let searchInputValue = searchInput.value

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
          const weatherList = new WeatherAPI('.weather-conditions')
          weatherList.addCondition('Humidity ', json.main.humidity)
          weatherList.addCondition('Temp ', json.main.temp)
          weatherList.addCondition('Description ', json.weather[0].description)
          weatherList.addCondition('Country ', json.sys.country)
          // const otherParent = document.querySelector('.other-bits')
          // addCondition(otherParent, 'humidity', json.main.humidity)
          // addCondition(otherParent, 'temp', json.main.temp)
          // addCondition(otherParent, 'description', json.weather[0].description)
          // addCondition(otherParent, 'country', json.sys.country)
          console.log(json)
        }
      )
  })
}

document.addEventListener('DOMContentLoaded', main)
