import React, { useState, useCallback } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Weather = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const apiKey = '20e49f98566b67ae68b6baf7dcc0b0d2';

 

  const getWeatherData = useCallback(async () => {
    try {
     
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }, [city, apiKey]); 

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      getWeatherData();
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            className="form-control"
            placeholder="Enter city and press Enter"
          />
        </div>
      </div>
      {weatherData && (
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2>{weatherData.name}</h2>
                <p>Temperature: {weatherData.main.temp} K</p>
                {/* Include additional weather information as needed */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Weather;
