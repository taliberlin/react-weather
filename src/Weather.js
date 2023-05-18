import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    day: "Monday",
    date: "05/21/2023",
    time: "15:53",
    city: "Vancouver",
    temperature: 19,
    iconURL:
      "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
    conditions: "Overcast",
    feelsLike: 14,
    windSpeed: 3,
    humidity: 66,
  };
  return (
    <div className="Weather">
      <div className="row current-city">
        <div className="col-7 today">
          <br />
          <div className="row today-information">
            <div className="col-3 today-info">
              <div className="curr-day">{weatherData.day}</div>
              <div className="date">{weatherData.date}</div>
              <div className="time">{weatherData.time}</div>
            </div>
            <div className="col-9 city">{weatherData.city}</div>
          </div>
          <br />
          <br />
          <div className="row temp">
            <div className="col-5 temp">
              <span className="curr-temp">{weatherData.temperature}</span>
              <span className="temp-unit">°C </span>
            </div>
            <div className="col-5 today-icon-conditions">
              <img
                src={weatherData.iconURL}
                alt={weatherData.conditions}
                className="today-icon"
                width="125"
              />
              <div className="conditions">{weatherData.conditions}</div>
            </div>
          </div>
          <br />
          <div className="row feels-like-wind-speed">
            <div className="col feels-like-wind-speed">
              <div className="feels-like">
                Feels like: {weatherData.feelsLike}°
              </div>
              <div className="wind-speed">
                Wind speed: {weatherData.windSpeed} km/h
              </div>
              <div className="humidity">Humidity: {weatherData.humidity}%</div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
