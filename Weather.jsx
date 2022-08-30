import '../css/Weather.css'
import React, { useState } from 'react'
import axios from 'axios'
import SecHeader from './SecHeader';

function Weather() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const API_KEY = "40358408b49cd7dcad1e7f7e30c9d2a5"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (

    <div className="app">
      <SecHeader />
      <div className='searchWeather'>
        <input type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder='Enter location'
          onKeyPress={searchLocation} />
      </div>
      <div className='containerWeather'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp} F</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <h1>{data.weather[0].description}</h1> : null}
          </div>
        </div>

          <div className='bottom'>
            <div className='feels'>
              {data.main ? <p className='bold'>{data.main.feels_like} F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className='humidity'>
              {data.main ? <p className='bold'>{data.main.humidity}</p> : null}
              <p>Humidity</p>
            </div>
            <div className='wind'>
              {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
              <p>Wind Speed </p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Weather;
