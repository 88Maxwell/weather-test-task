import React from "react";
import { List, Segment, Header } from "semantic-ui-react";
import WeatherWidgetRecord from "../WeatherWidgetRecord";
import weatherPropTypes from "../../../domens/Weather/weatherPropTypes";

function WeatherWidget({ weather }) {
    const { main, wind, name } = weather;

    return (
        <Segment>
            <Header>{name}</Header>
            <List divided>
                <WeatherWidgetRecord header="temperature" description={`${main.temp} ° F`} />
                <WeatherWidgetRecord header="max temperature" description={`${main.temp_max} ° F`} />
                <WeatherWidgetRecord header="min temperature" description={`${main.temp_min} ° F`} />
                <WeatherWidgetRecord header="pressure" description={`${main.pressure} atm`} />
                <WeatherWidgetRecord header="wind speed" description={`${wind.speed} m/s`} />
                <WeatherWidgetRecord header="wind degree" description={`${wind.deg} °`} />
            </List>
        </Segment>
    );
}

WeatherWidget.propTypes = weatherPropTypes;

export default WeatherWidget;
