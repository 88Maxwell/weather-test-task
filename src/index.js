import "./index.css";
import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import config from "./config";

import App from "./components/App";
import configureStore from "./utils/configureStore";

const history = createBrowserHistory();
const store = configureStore(undefined, {
    history,
    isLogged : config.common.storeLoggerEnabled
});

ReactDOM.render(<App store={store} history={history} />, document.getElementById("root"));

