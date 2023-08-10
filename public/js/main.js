const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerHTML = "Please Enter A City Name";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=85f3834a4d5dbbe2daa1954640a688a5`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

      temp.innerText = arrData[0].main.temp;
      //condition to check sunny or cloudy

      const tempMood = arrData[0].weather[0].main;
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          '<i class="fas fa-solid fa-sun" style = "color:#eccc68;"></i>';
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          '<i class = "fas fa-cloud" style = "color:#f1f2f6;"></i>';
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          '<i class = "fas fa-rain" style = "color:#a4b0be;"></i>';
      } else {
        temp_status.innerHTML =
          '<i class = "fas fa-cloud" style = "color:#f1f2f6;"></i>';
      }
    } catch {
      city_name.innerHTML = "Please Enter A City Name Properly";
    }
  }
};

submitBtn.addEventListener("click", getInfo);
