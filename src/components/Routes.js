import React from "react";
import { Route, Switch } from "react-router";
import StartPage from "./pages/StartPage";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={StartPage} />
        </Switch>
    );
}
