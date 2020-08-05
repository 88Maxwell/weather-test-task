import React from "react";
import PropTypes from "prop-types";
import { List } from "semantic-ui-react";

function WeatherWidgetRecord({ header = "header", description = "description," }) {
    return (
        <List.Item size="large">
            <List.Content>
                <List.Header>{header}</List.Header>
                <List.Description>{description}</List.Description>
            </List.Content>
        </List.Item>
    );
}

WeatherWidgetRecord.propTypes = {
    header      : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired
};

export default WeatherWidgetRecord;
