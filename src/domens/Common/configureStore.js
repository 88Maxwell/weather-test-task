import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import configureRootReducer from "../../reducers";

export default function configureStoreGlobal({ history }) {
    const middlewares = [ thunk ];

    if (history) {
        middlewares.push(routerMiddleware(history));
    }

    const rootReducer = configureRootReducer({ history });

    return createStore(rootReducer, undefined, compose(applyMiddleware(...middlewares)));
}
