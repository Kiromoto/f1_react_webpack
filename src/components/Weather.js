import React, {useState} from "react";
import axios from "axios";

const apikey = "f548d72749c6aad919dcb1751ae76631";

function Weather() {
    const lat = 53.9024716;
    const lon = 27.5618225;
    const weatherUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=" + `${lat}` + "&lon=" + `${lon}` + "&appid=" + `${apikey}`;
    const weatherUrlFree = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + `${apikey}`;
    const [weatherNow, setWeatherNow] = useState([]);

    let wlist = [];

    if (weatherNow.length <= 0) {
        axios.get(weatherUrlFree).then(result => {
            // console.log(result.data);
            setWeatherNow(result.data);
            console.log("weatherNow is this: "+ {weatherNow});
        });
    }
    else {
        console.log("Полученные ранее данные cod:" + `${weatherNow.cod}`);
        wlist = weatherNow.list;
        console.log(wlist);
    }



    return (
        <div>
            <h2>Hello from Fragment Weather.js</h2>
            <p>Полученные ранее данные cnt: {weatherNow.cnt}</p>
            <div>

            </div>

        </div>
);
}

export default Weather;
