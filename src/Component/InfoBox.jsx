import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import OpacityIcon from "@mui/icons-material/Opacity";
import CardActionArea from "@mui/material/CardActionArea";
import AirIcon from "@mui/icons-material/Air";
import "./InfoBox.css";
import { weatherImg } from "../CommonComponent/weatherImg.js";
import WeatherIcon from "../CommonComponent/WeatherIcon.jsx";
import { getTimeAndDayFromTimezoneOffset } from "../CommonComponent/helper.js";

export default function InfoBox({ weatherInfo }) {
  let cardImage = weatherImg.find((img) => {
    if (img.id === weatherInfo.weather.icon) {
      return img.url;
    }
  });

  const currentTime = getTimeAndDayFromTimezoneOffset(weatherInfo.timezone);
  return (
    <Card sx={{ maxWidth: 345 }} className="cardCon">
      <CardActionArea id="card">
        <CardMedia
          component="img"
          height="140"
          image={cardImage ? cardImage.url : ""}
          alt="green iguana"
        />
        <WeatherIcon
          weatherIcon={weatherInfo.weather.icon}
          className="weatherImgIcon"
        />

        <CardContent>
          <Typography gutterBottom component="div">
            <div className="weatherLoc">
              <div className="titleDes">
                <h2> {weatherInfo.city.toUpperCase()}</h2>
                <p className="des">{weatherInfo.name}</p>
              </div>
              <p>
                <span>{currentTime.day} </span>
                <span>{currentTime.time}</span>
              </p>
            </div>
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component="div"
          >
            <div className="iconCon">
              <WeatherIcon weatherIcon={weatherInfo.weather.icon} />
              <div>
                <h2>{weatherInfo.temp}&deg;C</h2>
                <p className="des">{weatherInfo.weather.main}</p>
              </div>
              <div className="Exinfo">
                <p>
                  <AirIcon /> {weatherInfo.wind.speed} mph
                </p>
                <p>
                  <OpacityIcon /> {weatherInfo.humidity} %
                </p>
              </div>
            </div>
            <p>feels like {weatherInfo.feels_like}&deg;C</p>
            {/* <p>Humidity: {weatherInfo.humidity}</p> */}
            {/* <p>Temp: {weatherInfo.temp}&deg;C</p> */}
            <p>Temp max: {weatherInfo.temp_max}&deg;C</p>
            <p>Temp min: {weatherInfo.temp_min}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
