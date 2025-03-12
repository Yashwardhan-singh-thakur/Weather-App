async function forwardGeocoding(city) {
  try {
    let geoApiUrl = `https://api.maptiler.com/geocoding/$%7B${city}%7D.json?key=${
      import.meta.env.VITE_GEO_API_KEY
    }`;
    let responce = await fetch(geoApiUrl);
    let jsonResponce = await responce.json();
    return jsonResponce.features[0].geometry.coordinates;
  } catch (err) {
    throw err;
  }
}

function userLocation(setLocation) {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition((position) => {
      return setLocation([position.coords.longitude, position.coords.latitude]);
    });
  } else {
    throw "this  browser does not have geoLocation access";
  }
}

const getTimeAndDayFromTimezoneOffset = (offsetInSeconds) => {
  // Get the current UTC time
  const now = new Date();
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60 * 1000;

  // Apply the offset in seconds (converted to milliseconds)
  const localTime = new Date(utcTime + offsetInSeconds * 1000);

  // Format the time
  const formattedTime = localTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // For AM/PM format
  });

  // Format the day
  const formattedDay = localTime.toLocaleDateString("en-US", {
    weekday: "long", // Full weekday name
  });

  return { time: formattedTime, day: formattedDay };
};

export { forwardGeocoding, userLocation, getTimeAndDayFromTimezoneOffset };
