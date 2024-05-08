//ee070f517b842840d1e7768e8ea4a397
const inputbox = document.getElementById("search-box");
const searchbtn = document.getElementById("button");
const weather_img = document.getElementById("weatherimg");
const temperature = document.querySelector(".temp");
const description = document.querySelector(".disc");
const windspeed = document.getElementById("windspd");
const humidity = document.getElementById("hum");
const city_name = document.querySelector(".cityname");

const location_not_found = document.querySelector('.location-not-found');

const weather_body =document.querySelector(".weather");



async function checkWeather(city){
    const api_key = "ee070f517b842840d1e7768e8ea4a397";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    city_name.innerHTML = `${weather_data.name}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windspeed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "images/clouds.png";
            break;
        case 'Clear':
            weather_img.src = "images/sun.png";
            break;
        case 'Rain':
            weather_img.src = "images/rainny.png";
            break;
        case 'Mist':
            weather_img.src = "images/fog.png";
            break;
        case 'Snow':
            weather_img.src = "images/snowy.png";
            break;

    }

    console.log(weather_data);
}


searchbtn.addEventListener('click', ()=>{
    checkWeather(inputbox.value);
});




