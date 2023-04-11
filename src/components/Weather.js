import React, {useState} from "react";
import axios from "axios";
import {wn} from './DataNow.js'
import "../styles/Weather.css";

const apikey = "f548d72749c6aad919dcb1751ae76631";

function Weather() {
    const lat = 53.9024716;
    const lon = 27.5618225;
    const weatherUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=" + `${lat}` + "&lon=" + `${lon}` + "&units=metric&appid=" + `${apikey}`;
    const weatherUrlFree = "http://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric&appid=" + `${apikey}`;
    const [weatherNow, setWeatherNow] = useState([]);
    // console.log("Вывод weatherNow до проверки if else" + `${weatherNow}`);
    //
    // if (weatherNow.length === 0) {
    //     console.log('weatherNow is EMPTY === ' + `${weatherNow}`);
    //     axios.get(weatherUrlFree).then(result => {
    //         // setWeatherNow(result.data)
    //         setWeatherNow(weatherNow[0]=result.data)
    //     })
    // } else {
    //     console.log('weatherNow is FULL === ' + `${weatherNow}`);
    //     console.log(weatherNow);
    // }

    return (
        <div className="divForAllWeather">
            <h2>Погода на сейчас:</h2>
            <div className="nowDayWeather">
                <h3>Погода на {wn.list[0].dt_txt}</h3>
                <h4>{wn.list[0].main.temp}</h4>
                <h4>{wn.list[0].main.pressure}</h4>
                <h4>{wn.list[0].dt}</h4>
                <h4>{wn.list[0].weather[0].icon}</h4>
                <img src="https://openweathermap.org/img/wn/10d@2x.png"></img>


            </div>

        </div>
    );
}

export default Weather;
