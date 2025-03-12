export default function WeatherIcon({ weatherIcon, className }) {
  let weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  return (
    <>
      <img className={className} src={weatherIconUrl} alt="weatherImgIcon" />
    </>
  );
}
