import RequestClient from "../Common/RequestClient";
import config from "../../config";

const openweatherApiMapRequest = new RequestClient(
    {
        apiUrl : config.openWeatherMap.apiUrl,
        prefix : config.openWeatherMap.prefix
    },
    {
        appid : config.openWeatherMap.appid
    }
);

export default {
    getweather : (params) => openweatherApiMapRequest.get("/weather", null, params)
};
