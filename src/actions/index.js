import axios from 'axios'

const api_key = "1c49755d3775c91dc1945d5471bfb9ef";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${api_key}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}