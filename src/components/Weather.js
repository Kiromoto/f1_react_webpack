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
    if (weatherNow.length === 0) {
        console.log('weatherNow is EMPTY === ' + `${weatherNow}`);
        axios.get(weatherUrlFree).then(result => {
            const dt = Object.keys(result.data.list);
            // setWeatherNow(weatherNow[0]=result.data)
            setWeatherNow(result.data.list);
        })
    } else {
        console.log('weatherNow is FULL === ' + `${weatherNow}`);
        console.log(weatherNow);
    }
    // const listIndex = 8
    // let s = "https://openweathermap.org/img/wn/" + `${wn.list[listIndex].weather[0].icon}` + "@2x.png";
    //
    // return (
    //     <div className="divForAllWeather">
    //         <h2>Погода на сейчас:</h2>
    //         <div className="nowDayWeather">
    //             <h3>Погода на {wn.list[listIndex].dt_txt}</h3>
    //             <h4>{wn.list[listIndex].main.temp}</h4>
    //             <h4>{wn.list[listIndex].main.pressure}</h4>
    //             <h4>{wn.list[listIndex].dt}</h4>
    //             <h4>{wn.list[listIndex].weather[0].icon}</h4>
    //             <img src={s}></img>
    //
    //
    //         </div>
    //
    //     </div>
    // );

        return (
                <div className="divForAllWeather">
                    {weatherNow.map(el => <div className="nowDayWeather">
                        {/*<img src={"https://openweathermap.org/img/wn/+" + {el.weather[0].icon} + "@2x.png"}></img>*/}
                        <p>Погода на: {el.dt_txt}</p>
                        <p>Температура: {el.main.temp}&deg; C</p>
                        <p>Ощущается как: {el.main.feels_like}&deg; C</p>
                        <p>Облачность: {el.clouds.all}%</p>
                        <p>Давление: {el.main.pressure} гПа</p>
                        <p>Название картинки: {el.weather[0].icon}</p>

                    </div>)}

                </div>

    );
}

export default Weather;
