import React from "react";
import PropTypes from "prop-types";
import { List } from "semantic-ui-react";

function WetherWidgetRecord({ header = "header", description = "description," }) {
    return (
        <List.Item size="large">
            <List.Content>
                <List.Header>{header}</List.Header>
                <List.Description>{description}</List.Description>
            </List.Content>
        </List.Item>
    );
}

WetherWidgetRecord.propTypes = {
    header      : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired
};

export default WetherWidgetRecord;
