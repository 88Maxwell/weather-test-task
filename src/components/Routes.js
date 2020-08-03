import React from "react";
import { Route, Switch } from "react-router";
import StartPageContainer from "./pages/StartPage";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={StartPageContainer} />
        </Switch>
    );
}
