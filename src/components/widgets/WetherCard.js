import React from "react";
// import PropTypes from "prop-types";
import {
    Grid, Image, Card, Button, List
} from "semantic-ui-react";
import WetherCardRecord from "./WetherCardRecord";

function WetherCard() {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Image
                                floated="right"
                                size="mini"
                                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                            />
                            <Card.Header>Steve Sanders</Card.Header>
                            <Card.Description>
                                <List>
                                    <WetherCardRecord />
                                </List>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className="ui two buttons">
                                <Button basic color="green">
                                    Approve
                                </Button>
                                <Button basic color="red">
                                    Decline
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

WetherCard.propTypes = {};

export default WetherCard;
