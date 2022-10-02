const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "858a2cff7b2aea6f38f13a0f5d0c1fcb";

function onGeoOK(position)
{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });

}

function onGeoError(){
alert("날씨 정보를 위해 허용 해주세요!")
}


navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);