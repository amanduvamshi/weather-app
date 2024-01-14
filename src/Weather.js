import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Select, VStack } from '@chakra-ui/react';


// Import the image
import backgroundImage from './images/weather.jpg';


const citiesInIndia = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  // Add more cities as needed
];

const Weather = () => {

  const [weatherData, setWeatherData] = useState(null);

  const [selectedCity, setSelectedCity] = useState('');
  const apiKey = '';


  const handleCitySelect = async () => {
    
    // Perform any additional logic (e.g., fetch weather data) here
    try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}`
    );
    setWeatherData(response.data);
    console.log('weatherData:', weatherData)
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
  };

 

 
  return (
    <Box
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      minH="100vh"
      p={5}
    >
      <VStack spacing={4} align="center">
      
        <Select
          value={handleCitySelect}
          onChange={(e) => setSelectedCity(e.target.value)}
          placeholder="Select a city"
        >
          {citiesInIndia.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Select>
       
        {weatherData && (
          <Box mt={4} color='white'>
            <strong>Weather for {selectedCity}:</strong>
            <p>Temperature: {weatherData.main.temp} K</p>
            {/* Include additional weather information as needed */}
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Weather;
