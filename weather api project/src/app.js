const currentTemperature = document.querySelector('.current-temperature');
const currentFeelsLikeTemperature = document.querySelector('.current-feels-like-temperature');
const currentLocation = document.querySelector('.current-location');
const currentConditionIcon = document.querySelector('.current-condition-icon');
const currentConditionDescription = document.querySelector('.current-condition-description');
const currentLocalTime = document.querySelector('.local-time');
const cloud = document.querySelector('.cloud');
const dewPoint = document.querySelector('.dewpoint');
const gust = document.querySelector('.gust');
const heatIndex = document.querySelector('.heat-index');
const humidity = document.querySelector('.humidity');
const isDay = document.querySelector('.is-day');
const lastUpdated = document.querySelector('.last-updated');
const lastUpdatedEpoch = document.querySelector('.last-updated-epoch');
const precipitation = document.querySelector('.precip');
const pressure = document.querySelector('.pressure');
const uv = document.querySelector('.uv');
const visibility = document.querySelector('.visibility');
const windDegree = document.querySelector('.wind-degree');
const windDirection = document.querySelector('.wind-direction');
const wind = document.querySelector('.wind');
const windChill = document.querySelector('.windchill');

const API_URL = 'http://api.weatherapi.com/v1/current.json';
const API_KEY = API_KEY;
const API_QUERY = 'auto:ip';

async function getWeatherData() {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}&q=${API_QUERY}`);

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    data = await response.json();

    populateData();

  } catch (error) {
    console.log('Error: ' + error);
  };
};

function populateData() {
  setCurrentTemp();
  setCurrentFeelsLikeTemp();
  setLocation();
  setCurrentConditionIcon();
  setCurrentConditionDescription();
  setLocalTime();
  setCloud();
  setDewPoint();
  setGust();
  setHeatIndex();
  setHumidity();
  setIsDay();
  setLastUpdated();
  setLastUpdatedEpoch();
  setPrecipitation();
  setPressure();
  setUv();
  setVisibility();
  setWindDegree();
  setWindDirection();
  setWind();
  setWindChill();
  setBackgroundColor();
};

function setCurrentTemp() {
  currentTemperature.innerText = `${data.current.temp_c}°C / ${data.current.temp_f}°F`;
};

function setCurrentFeelsLikeTemp() {
  currentFeelsLikeTemperature.innerText = `Feels like ${data.current.feelslike_c}°C / ${data.current.feelslike_f}°F`;
};

function setLocation() {
  currentLocation.innerText = `${data.location.name}, ${data.location.country}`;
};

function setCurrentConditionIcon() {
  currentConditionIcon.src = data.current.condition.icon;
};

function setCurrentConditionDescription() {
  currentConditionDescription.innerText = data.current.condition.text;
};

function setLocalTime() {
  currentLocalTime.innerText = data.location.localtime;
};

function setCloud() {
  cloud.innerText = `${data.current.cloud}%`;
};

function setDewPoint() {
  dewPoint.innerText = `${data.current.dewpoint_c}°C / ${data.current.dewpoint_f}°F`;
};

function setGust() {
  gust.innerText = `${data.current.gust_kph}kph / ${data.current.gust_mph}mph`;
};

function setHeatIndex() {
  heatIndex.innerText = `${data.current.heatindex_c}°C / ${data.current.heatindex_c}°F`;
};

function setHumidity() {
  humidity.innerText = `${data.current.humidity}%`;
};

function setIsDay() {
  isDay.innerText = data.current.is_day;
};

function setLastUpdated() {
  lastUpdated.innerText = data.current.last_updated;
};

function setLastUpdatedEpoch() {
  lastUpdatedEpoch.innerText = data.current.last_updated_epoch;
};

function setPrecipitation() {
  precipitation.innerText = `${data.current.precip_in}in / ${data.current.precip_mm}mm`;
};

function setPressure() {
  pressure.innerText = `${data.current.pressure_in}in / ${data.current.pressure_mb}mb`;
};

function setUv() {
  uv.innerText = data.current.uv;
};

function setVisibility() {
  visibility.innerText = `${data.current.vis_km}km / ${data.current.vis_miles}m`;
};

function setWindDegree() {
  windDegree.innerText = `${data.current.wind_degree}°`;
};

function setWindDirection() {
  windDirection.innerText = data.current.wind_dir;
};

function setWind() {
  wind.innerText = `${data.current.wind_kph}kph / ${data.current.wind_mph}mph`;
};

function setWindChill() {
  windChill.innerText = `${data.current.windchill_c}°C / ${data.current.windchill_f}°F`;
};

function setBackgroundColor() {
  switch (data.current.condition.text) {
    case 'Sunny':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(255, 254, 108, 1) 0%, rgba(172, 255, 255, 1) 50%, rgba(245, 255, 255, 1) 100%)';
      break;
    case 'Clear':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(255, 254, 108, 1) 0%, rgba(172, 255, 255, 1) 50%, rgba(245, 255, 255, 1) 100%)';
      break;
    case 'Partly cloudy':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Cloudy':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Overcast':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Patchy rain possible':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Partly cloudy':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Light rain':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(229, 248, 255, 1) 0%, rgba(214, 255, 255, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Moderate rain at times':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(229, 248, 255, 1) 0%, rgba(214, 255, 255, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Moderate rain':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(229, 248, 255, 1) 0%, rgba(214, 255, 255, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Heavy rain at times':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(229, 248, 255, 1) 0%, rgba(214, 255, 255, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Heavy rain':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(229, 248, 255, 1) 0%, rgba(214, 255, 255, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Torrential rain shower':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(229, 248, 255, 1) 0%, rgba(214, 255, 255, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Patchy snow possible':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Light snow':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Moderate snow':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Heavy snow':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Thundery outbreaks possible':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Patchy light rain with thunder':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Moderate or heavy rain with thunder':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Light sleet':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Moderate or heavy sleet':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Ice pellets':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Mist':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Fog':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Patchy light drizzle':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Light drizzle':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Freezing fog':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Light freezing rain':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Moderate or heavy freezing rain':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Patchy light rain':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Light rain shower':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(167, 167, 167, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(239, 239, 239, 1) 100%)';
      break;
    case 'Moderate or heavy rain shower':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Patchy light snow':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Light snow shower':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Moderate or heavy snow shower':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Light showers of ice pellets':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Moderate or heavy showers of ice pellets':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Blizzard':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Blowing snow':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Patchy freezing drizzle possible':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Patchy sleet possible':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Patchy snow possible':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    case 'Patchy ice pellets possible':
      document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(248, 248, 248, 1) 50%, rgba(182, 182, 182, 1) 100%)';
      break;
    default:
      document.body.style.backgroundColor = 'lightgrey';
      break;
  };
};

getWeatherData();