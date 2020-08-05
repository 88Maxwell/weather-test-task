import React from "react";
import { Route, Switch } from "react-router";
import WetherPageContainer from "../../../containers/Wether/WetherPageContainer";
import StartPageContainer from "../../../containers/Common/StartPageContainer";

export default function Routes() {
    return (
        <Switch>
            <Route path="/wether" component={WetherPageContainer} />
            <Route path="/" component={StartPageContainer} />
        </Switch>
    );
}
