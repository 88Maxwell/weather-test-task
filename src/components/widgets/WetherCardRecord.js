import React from "react";
import PropTypes from "prop-types";
import { List } from "semantic-ui-react";

function WetherCardRecord({ iconName = "github", header = "header", description = "description," }) {
    return (
        <List.Item size="large">
            <List.Icon name={iconName} size="big" />
            <List.Content>
                <List.Header>{header}</List.Header>
                <List.Description>{description}</List.Description>
            </List.Content>
        </List.Item>
    );
}

// WetherCardRecord.propTypes = {
//     iconName    : PropTypes.string.isRequired,
//     header      : PropTypes.string.isRequired,
//     description : PropTypes.string.isRequired
// };

export default WetherCardRecord;
