import { createSelector } from "reselect";

import { GET_WEATHER_SUCCESS, GET_WEATHER_REQUEST, GET_WEATHER_FAIL } from "../../actionTypes/weather";

import createLoadableReducer from "../../domens/Common/createLoadableReducer";

export default createLoadableReducer({
    requestActionType : GET_WEATHER_REQUEST,
    successActionType : GET_WEATHER_SUCCESS,
    failureActionType : GET_WEATHER_FAIL
});

const getRoot = (state) => state.weather.current;

const getWeatherState = createSelector(getRoot, (state) => state.state);
const getWeatherError = createSelector(getRoot, (state) => state.error);
const getWeather = createSelector(getRoot, (state) => state.data);

export { getWeatherState, getWeatherError, getWeather };
