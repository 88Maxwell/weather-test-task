import "semantic-ui-css/semantic.min.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import App from "./components/Common/App";
import configureStore from "./domens/Common/configureStore";

const history = createBrowserHistory();
const store = configureStore({ history });

ReactDOM.render(<App store={store} history={history} />, document.getElementById("root"));
