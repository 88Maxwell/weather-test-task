import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import configureRootReducer from "../reducers";

export default function configureStoreGlobal({ history, isLogged = true }) {
    const middlewares = [ thunk ];

    if (history) {
        console.log("THERE");
        middlewares.push(routerMiddleware(history));
    }

    if (isLogged) {
        // eslint-disable-next-line global-require
        const { createLogger } = require("redux-logger");
        const logger = createLogger();

        middlewares.push(logger);
    }

    const rootReducer = configureRootReducer({ history });

    return createStore(rootReducer, undefined, compose(applyMiddleware(...middlewares)));
}


// export default ({ history }) => applyMiddleware(
//     thunk,
//     routerMiddleware(history)
// )(createStore)(configureRootReducer({ history }));
