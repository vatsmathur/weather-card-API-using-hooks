import React, { Component } from "react";
import "./WeatherBlock.css";
class WeatherBlock extends Component {
  myUrl = this.props.imgUrl;
  render() {
    console.log("my props", this.props, this.myUrl);

    return (
      <div class="container">
        <img
          src={`${this.props.imgUrl}/${this.props.weatherData.weather.icon}`}
          alt="img"
          class="weatherIcon"
        />
        <div class="cityName">
          {this.props.weatherData.location.metro}{" "}
          {this.props.weatherData.location.macro}
        </div>
        <div class="weatherStatus">{this.props.weatherData.weather.status}</div>
        <div class="temp">{this.props.weatherData.weather.tempF} F</div>
      </div>
    );
  }
}

export default WeatherBlock;
