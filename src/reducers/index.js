// eslint-disable-next-line import/prefer-default-export
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import wether from "./wether";


export default ({ history }) => combineReducers({
    router : connectRouter(history),
    ...combineReducers({ wether })
});
