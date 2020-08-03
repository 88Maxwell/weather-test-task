import React from "react";
import { List, Segment, Header } from "semantic-ui-react";
import WetherWidgetRecord from "../WetherWidgetRecord";
import WetherPropTypes from "./WetherPropTypes";

function WetherWidget({ wether }) {
    const { main, wind, name } = wether;

    return (
        <Segment>
            <Header>{name}</Header>
            <List divided>
                <WetherWidgetRecord header="temperature" description={`${main.temp} ° F`} />
                <WetherWidgetRecord header="max temperature" description={`${main.temp_max} ° F`} />
                <WetherWidgetRecord header="min temperature" description={`${main.temp_min} ° F`} />
                <WetherWidgetRecord header="pressure" description={`${main.pressure} atm`} />
                <WetherWidgetRecord header="wind speed" description={`${wind.speed} m/s`} />
                <WetherWidgetRecord header="wind degree" description={`${wind.deg} °`} />
            </List>
        </Segment>
    );
}

WetherWidget.propTypes = WetherPropTypes;

export default WetherWidget;
