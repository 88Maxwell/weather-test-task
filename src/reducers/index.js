// eslint-disable-next-line import/prefer-default-export
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import weather from "./weather";

export default ({ history }) => combineReducers({
    router : connectRouter(history),
    weather
});
