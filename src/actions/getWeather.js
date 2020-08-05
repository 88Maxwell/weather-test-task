import { createAction } from "redux-actions";
import { GET_WEATHER_SUCCESS, GET_WEATHER_REQUEST, GET_WEATHER_FAIL } from "../actionTypes/weather";
import weatherApi from "../domens/Weather/weatherApi";

export const getweatherRequest = createAction(GET_WEATHER_REQUEST);
export const getweatherSuccess = createAction(GET_WEATHER_SUCCESS);
export const getweatherFailure = createAction(GET_WEATHER_FAIL);

export default function getWeather({ lat = 35, lon = 139, city: q = "Kyiv" }) {
    return async (dispatch) => {
        const data = {
            lat,
            lon,
            q
        };

        dispatch(getweatherRequest(data));
        try {
            const res = await weatherApi.getweather(data);

            dispatch(getweatherSuccess(res));

            return res;
        } catch (err) {
            dispatch(getweatherFailure(err));

            return null;
        }
    };
}
