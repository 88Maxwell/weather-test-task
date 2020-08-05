import RequestClient from "../Common/RequestClient";
import config from "../../config";

const openWetherApiMapRequest = new RequestClient(
    {
        apiUrl : config.openWeatherMap.apiUrl,
        prefix : config.openWeatherMap.prefix
    },
    {
        appid : config.openWeatherMap.appid
    }
);

export default {
    getWether : (params) => openWetherApiMapRequest.get("/weather", null, params)
};
