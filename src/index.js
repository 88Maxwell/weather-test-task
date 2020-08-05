import "semantic-ui-css/semantic.min.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { createHashHistory } from "history";

import App from "./components/Common/App";
import configureStore from "./domens/Common/configureStore";

const history = createHashHistory({ hashType: "slash" });
const store = configureStore({ history });

ReactDOM.render(<App store={store} history={history} />, document.getElementById("root"));
