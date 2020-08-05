import React from "react";
import { Route, Switch } from "react-router";
import weatherPageContainer from "../../../containers/Weather/WeatherPageContainer";
import StartPageContainer from "../../../containers/Common/StartPageContainer";

export default function Routes() {
    return (
        <Switch>
            <Route path="/weather" component={weatherPageContainer} />
            <Route path="/" component={StartPageContainer} />
        </Switch>
    );
}
