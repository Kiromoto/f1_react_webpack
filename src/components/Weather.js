import React, {useState} from "react";
import axios from "axios";
import Select from "react-select";
import {wn} from './DataNow.js'
import {weather3} from './Data30.js'
import "../styles/Weather.css";

const apikey = "f548d72749c6aad919dcb1751ae76631";

const City = [
    {
        value: "Minsk",
        label: "Минск",
        lat: 53.9024716,
        lon: 27.5618225,
    },
    {
        value: "Moskow",
        label: "Москва",
        lat: 55.7504461,
        lon: 37.6174943,
    },
    {
        value: "London",
        label: "Лондон",
        lat: 51.51561771,
        lon: -0.0919983,
    },
    {
        value: "Kiev",
        label: "Киев",
        lat: 50.4500336,
        lon: 30.5241361,
    },
    {
        value: "Istanbul",
        label: "Стамбул",
        lat: 41.0091982,
        lon: 28.9662187,
    },
];


let weatherUrlFree = "http://api.openweathermap.org/data/2.5/forecast?lat=" + `${City[0].lat}` + "&lon=" + `${City[0].lon}` + "&units=metric&&lang=ru&appid=" + `${apikey}`;
// console.log('weatherUrlFree START');
// console.log(weatherUrlFree);
// let weatherNow = [];
// console.log('weatherNow START');
// console.log(weatherNow);
//
//
// console.log('currentCity START');
// console.log(currentCity);
//
// let hrefPic = {};
// console.log('hrefPic START');
// console.log(hrefPic);


function Weather(props) {
    // https://api.openweathermap.org/data/3.0/onecall?lat=53.9024716&lon=27.5618225&&exclude=hourly,minutely&units=metric&appid=f548d72749c6aad919dcb1751ae76631
    // const weatherUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=" + `${City[0].lat}` + "&lon=" + `${City[0].lon}` + "&exclude=hourly,minutely&units=metric&appid=" + `${apikey}`;
    // let weatherUrlFree = "http://api.openweathermap.org/data/2.5/forecast?lat=" + `${City[0].lat}` + "&lon=" + `${City[0].lon}` + "&units=metric&&lang=ru&appid=" + `${apikey}`;
    let weatherNow = [];
    const [currentCity, setCurrentCity] = useState(City[0]);
    let hrefPic = {};

    function makePicHref(w) {
        let hPic = {};
        w.map(element => {
            hPic[element.dt] = "https://openweathermap.org/img/wn/" + `${element.weather[0].icon}` + "@2x.png";
        });
        return hPic;
    };


    // if (!weatherNow.length) {
    //     axios.get(weatherUrlFree).then(result => {
    //         weatherNow = result.data.list;
    //         hrefPic = makePicHref(weatherNow);
    //     });
    // } else {
    //     hrefPic = makePicHref(weatherNow);
    // }

    const onChange = (newValue) => {
        setCurrentCity(newValue);

        console.log('currentCity.lon ' + currentCity.label);
        console.log(currentCity.lon);
        console.log('currentCity.lat ' + currentCity.label);
        console.log(currentCity.lat);


        weatherUrlFree = "http://api.openweathermap.org/data/2.5/forecast?lat=" + `${currentCity.lat}` + "&lon=" + `${currentCity.lon}` + "&units=metric&&lang=ru&appid=" + `${apikey}`;

        console.log('weatherUrlFree ' + currentCity.label);
        console.log(weatherUrlFree);

        axios.get(weatherUrlFree).then(result => {
            console.log('weatherUrlFree from axios ' + currentCity.label);
            console.log(weatherUrlFree);
            weatherNow = result.data.list;


            console.log('result' + currentCity.label);
            console.log(result.data);
            console.log('weatherNow ' + currentCity.label);
            console.log(weatherNow);
            hrefPic = makePicHref(weatherNow)
        });

    }

    return (
        <div>
            <div>
                <h2>Выберите город: </h2>
                <Select onChange={onChange} value={currentCity} options={City}
                        placeholder={'Здесь выберите город'} autoFocus={'True'} isSearchable={'True'}></Select>
            </div>

            <div className="divForAllWeather">
                {weatherNow.map(el => <div className="Day8Weather" key={el.dt}>
                    <p>Погода в городе {currentCity.label} на: {el.dt_txt}</p>
                    <img src={hrefPic[el.dt]}/>
                    <p>Описание: {el.weather[0].description}</p>
                    <p>Температура днем: {el.main.temp}&deg; C</p>
                    <p>Ощущается как: {el.main.feels_like}&deg; C</p>
                    <p>Давление: {el.main.pressure} гПа</p>
                    <p>Влажность: {el.main.humidity}%</p>
                    <p>Скорость ветра: {el.wind.speed} м/с</p>

                </div>)}
            </div>
        </div>);

}

export default Weather;


