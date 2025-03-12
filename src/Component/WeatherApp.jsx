import InfoBox from "./InfoBox";
import { useState, useEffect } from "react";
import { forwardGeocoding, userLocation } from "../CommonComponent/helper";
import SearchBox from "./SearchBox";
import Heading from "../CommonComponent/Heading";
import Footer from "../CommonComponent/Footer";
import "./WeatherApp.css";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "",
    feels_like: "",
    temp: "",
    humidity: "",
    temp_max: "",
    temp_min: "",
    visibility: "",
    name: "",
    weather: { main: "", description: "", icon: "" },
    wind: { speed: "", deg: "" },
    timezone: "",
  });
  let [location, setLocation] = useState([]);
  let [isError, setIsError] = useState(false);

  useEffect(() => {
    userLocation(setLocation);
  }, []);

  async function weatherApi(evt, city) {
    try {
      evt ? evt.preventDefault() : "";
      let [lon, lat] = evt ? await forwardGeocoding(city) : city;
      // console.log(lat, lon);
      let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`;
      let responce = await fetch(weatherApiUrl);
      let jsonResponce = await responce.json();
      setIsError(false);
      setWeatherInfo((currInfo) => {
        return {
          ...currInfo,
          city: evt ? city : jsonResponce.name,
          feels_like: jsonResponce.main.feels_like,
          temp: jsonResponce.main.temp,
          humidity: jsonResponce.main.humidity,
          temp_max: jsonResponce.main.temp_max,
          temp_min: jsonResponce.main.temp_min,
          visibility: jsonResponce.visibility,
          name: jsonResponce.name,
          weather: {
            main: jsonResponce.weather[0].main,
            description: jsonResponce.weather[0].description,
            icon: jsonResponce.weather[0].icon,
          },
          wind: jsonResponce.wind,
          timezone: jsonResponce.timezone,
        };
      });
    } catch (err) {
      setIsError(true);
    }
  }

  useEffect(
    (e) => {
      if (location.length > 0) {
        weatherApi(e, location);
      }
    },
    [location]
  );

  // console.log(weatherInfo);

  return (
    <div className="app">
      <header>
        <Heading />
      </header>
      <main>
        <SearchBox weatherApi={weatherApi} error={isError} />
        <InfoBox weatherInfo={weatherInfo} />
      </main>
      <Footer />
    </div>
  );
}
