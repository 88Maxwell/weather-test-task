import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import Routes from "../Routes";

function App({ history, store }) {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </Provider>
    );
}

App.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    history : PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    store   : PropTypes.object.isRequired
};

export default App;
