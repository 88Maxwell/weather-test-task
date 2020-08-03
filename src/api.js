import RequestClient from "./utils/RequestClient";
import config from "./config";

const openWetherApiMapRequest = new RequestClient(
    {
        apiUrl : config.openWeatherMap.apiUrl,
        prefix : config.openWeatherMap.prefix
    },
    {
        appid : config.openWeatherMap.appid
    }
);

export const wetherApi = {
    getWether : (params) => openWetherApiMapRequest.get("/weather", null, params)
};
