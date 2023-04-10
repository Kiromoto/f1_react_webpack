import React, {useState} from "react";
import axios from "axios";

const apikey = "f548d72749c6aad919dcb1751ae76631";

function Weather() {
    const lat = 53.9024716;
    const lon = 27.5618225;
    const weatherUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=" + `${lat}` + "&lon=" + `${lon}` + "&appid=" + `${apikey}`;

    const [weatherNow, setWeatherNow] = useState([]);

    // axios.get(weatherUrl).then(result => {
    //     console.log(result);
    //     setWeatherNow(result.data)
    // });

    if (!weatherNow.length) {
        axios.get(weatherUrl).then(result => {
            console.log(result);
            setWeatherNow(result.data);
        });
    }


    return (
        <div>
            <h2>Hello from Fragment Weather.js</h2>
        </div>
);
}

export default Weather;