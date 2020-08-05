import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { goBack } from "connected-react-router";
import WeatherPage from "../../components/Weather/WeatherPage";

import { getWeatherState, getWeatherError, getWeather } from "../../reducers/weather/current";
import getWeatherAction from "../../actions/getWeather";

const mapState = createStructuredSelector({
    weatherState : getWeatherState,
    weatherError : getWeatherError,
    weather      : getWeather
});

const mapDispatch = (dispatch) => ({
    onGetWeather : ({ lat, lon, city }) => dispatch(getWeatherAction({ lat, lon, city })),
    onGoBack     : () => dispatch(goBack())
});

export default withRouter(connect(mapState, mapDispatch)(WeatherPage));
