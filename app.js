const API_KI = "7d7ac1be16554b3d85f104607240902";
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

// const url = 'https://the-weather-api.p.rapidapi.com/api/weather/mumbai';

const getWeather = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KI}&q=${city}&`;

  const response = await fetch(url);
  let data = await response.json();
  return showWeater(data);
};

const showWeater = (data) => {
  if (data.cod == "400") {
    weather.innerHTML = `City not found!`;
    return;
  }
  weather.innerHTML = ` <div>
  <img src="  ${data.current.condition.icon}">
</div>
<div>
  <h2>${data.current.temp_c} ℃</h2>
  <h4>${data.current.condition.text}</h4>
</div>`;
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});
