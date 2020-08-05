import React from "react";
import { Route, Switch } from "react-router";
import WetherPageContainer from "../../../containers/Wether/WetherPageContainer";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={WetherPageContainer} />
        </Switch>
    );
}
