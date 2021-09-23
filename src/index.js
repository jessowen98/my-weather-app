function formatDate(date) {
  let currentDate = now.getDate();
  let listedMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let month = listedMonths[now.getMonth()];
  let year = now.getFullYear();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let mins = now.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }
  let listedDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let day = now.getDay();
  return `${listedDays[day]}, ${currentDate} ${month} ${year}, ${hours}:${mins}`;
}

function search(event) {
  event.preventDefault();
  let displayCity = document.querySelector("#city");
  let citySearch = document.querySelector("#city-search");
  displayCity.innerHTML = citySearch.value;

  let apiKey = "c1d63dbb464264ab961e588476c61e78";
  let city = document.querySelector("#city-search").value;
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  let weatherApi = `${apiUrl}${city}&appid=${apiKey}&units=metric`;

  axios.get(weatherApi).then(showTemperature);
}

let displayDate = document.querySelector("#date");
let now = new Date();
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);
displayDate.innerHTML = formatDate(now);

function convertF(event) {
  event.preventDefault();
  let displayTemp = document.querySelector("#temp");
  displayTemp.innerHTML = 79;
}

function convertC(event) {
  event.preventDefault();
  let displayTemp = document.querySelector("#temp");
  displayTemp.innerHTML = 26;
}

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", convertF);

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", convertC);

//week 5 homework

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}
