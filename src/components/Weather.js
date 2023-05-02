import React, {useState} from "react";
import axios from "axios";
import {wn, weather3} from './DataNow.js'
import "../styles/Weather.css";

const apikey = "f548d72749c6aad919dcb1751ae76631";

function Weather() {
    const lat = 53.9024716;
    const lon = 27.5618225;
    // https://api.openweathermap.org/data/3.0/onecall?lat=53.9024716&lon=27.5618225&units=metric&appid=f548d72749c6aad919dcb1751ae76631
    const weatherUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=" + `${lat}` + "&lon=" + `${lon}` + "&units=metric&appid=" + `${apikey}`;
    const weatherUrlFree = "http://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric&appid=" + `${apikey}`;
    const [weatherNow, setWeatherNow] = useState([]);
    const [weather8days, setWeather8days] = useState([]);

    // if (weatherNow.length === 0) {
    //     console.log('weatherNow is EMPTY === ' + `${weatherNow}`);
    //     axios.get(weatherUrl).then(result => {
    //         console.log('GETTED weather is this === ' + `${result.data}`);
    //         setWeatherNow(result.current);
    //         setWeather8days(result.daily);
    //     })
    // } else {
    //     console.log('weatherNow is FULL === ' + `${weatherNow}`);
    //     console.log(weatherNow);
    //     console.log('weather8days is FULL === ' + `${weather8days}`);
    //     console.log(weather8days);
    // }

    if (weather8days.length === 0) {
        setWeatherNow(weather3.current);
        setWeather8days(weather3.daily);
        console.log('Weather add!!!');
    }
    else {
        console.log('Weather full!!!');
        console.log('weatherNow is FULL === ' + `${weatherNow}`);
        console.log(weatherNow);
        console.log('weather8days is FULL === ' + `${weather8days}`);
        console.log(weather8days);
    }

    // {/*<img src={"https://openweathermap.org/img/wn/+" + {el.weather[0].icon} + "@2x.png"}></img>*/}

    return (
        <div className="divForAllWeather">
            {weather8days.map(el => <div className="Day8Weather">
                <p>Погода на: {el.dt}</p>
                <p>{el.weather[0].icon}</p>
                <p>{el.weather[0].description}</p>
                <p>Температура днем: {el.temp.day}&deg; C</p>
                <p>Температура ночью: {el.temp.night}&deg; C</p>
                <p>Ощущается как: {el.feels_like.day}&deg; C</p>
                <p>Давление: {el.pressure} гПа</p>
                <p>Влажность: {el.humidity}%</p>
                <p>Скорость ветра: {el.wind_speed} м/с</p>
            </div>)}

        </div>);

}




export default Weather;
