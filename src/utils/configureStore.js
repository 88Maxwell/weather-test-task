import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import configureRootReducer from "../reducers";

// export default function configureStoreGlobal(initialState = undefined, { history, isLogged = false }) {
//     const middlewares = [ thunk ];

//     if (history) {
//         middlewares.push(routerMiddleware(history));
//     }

//     if (isLogged) {
//         // eslint-disable-next-line global-require
//         const { createLogger } = require("redux-logger");
//         const logger = createLogger();

//         middlewares.push(logger);
//     }

//     const rootReducer =

//     return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
// }


export default ({ history }) => applyMiddleware(
    thunk,
    routerMiddleware(history)
)(createStore)(configureRootReducer({ history }));
