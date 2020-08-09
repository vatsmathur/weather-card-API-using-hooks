import React, { useState, useEffect } from "react";
import "./Weather.css";
import WeatherBlock from "../Weather-block/WeatherBlock";
const BASE_IMG_PATH = "https://weather-exercise.surge.sh/images";
const ENDPOINT = "https://weather-exercise.surge.sh/weather.json";

// Design Spec : https://weather-exercise.surge.sh/spec.svg
// Sunny Image: https://weather-exercise.surge.sh/images/sunny.png

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  console.log("my weatherData", weatherData);
  useEffect(() => {
    const fetchWeatherData = async () => {
      console.info("Weather API Called");
      const result = await fetch(ENDPOINT).then((res) => res.json());
      setWeatherData(result);
    };
    fetchWeatherData();
  }, []);

  const buildWeatherCards = () => {
    return (
      <div>
        {weatherData.map((el) => (
          <WeatherBlock
            class="container-block"
            weatherData={el}
            imgUrl={BASE_IMG_PATH}
            key={el.reportedAt}
          />
        ))}
        <div>Here is the API response for reference:</div>
        <pre>{JSON.stringify(weatherData, null, 2)}</pre>
      </div>
    );
  };

  return buildWeatherCards();
};

export default Weather;
