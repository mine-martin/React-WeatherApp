import React, { useState } from 'react';
import '../index.css';
import axios from 'axios';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [data, setData] = useState({});

  // const url = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=00092af9546f270225577c9134fb3395`

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=00092af9546f270225577c9134fb3395`;

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((result) => {
        setData(result.data);
        console.log('result', result.data);
      });
      setLocation('');
    }
  };

  return (
    <div>
      <div className='search'>
        <input
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='Enter Your Location'
          onKeyDown={searchLocation}
        />
      </div>
      <div className='container'>
        <div className='up'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <p>Max {data.main.temp_max} F </p> : null}
            {data.main ? <p>Min {data.main.temp_min} F </p> : null}
          </div>
          <div className='clounds'>
            {data.weather ? <p> {data.weather[0].main} </p> : null}
          </div>
        </div>
        <div className='down'>
          <div className='feels'>
            {data.main ? <p>{data.main.feels_like} F </p> : null}
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            {data.main ? <p>{data.main.humidity} F </p> : null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
            {data.wind ? <p>{data.wind.speed} MPH </p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
