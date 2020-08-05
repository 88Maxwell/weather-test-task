/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from "react";
import qs from "qs";
import PropTypes from "prop-types";
import {
    Grid, Loader, Message, Button, Segment
} from "semantic-ui-react";
import WetherWidget from "../WetherWidget";
import usePosition from "../../../hooks/usePosition";
import LoaderHelper from "../../Common/LoaderHelper";

function WetherPage({
    wetherState, wetherError, wether, onGetWether, onGoBack, location
}) {
    const { position } = usePosition(false);

    const { search } = location;

    const { city } = qs.parse(search.slice(1));

    useEffect(() => {
        const { latitude: lat, longitude: lon } = position || {};

        if (city) {
            onGetWether({ city });
        } else {
            onGetWether({ lat, lon });
        }
    }, [ onGetWether, city, position ]);


    return (
        <Grid as="main" verticalAlign="middle" padded centered>
            <Grid.Row>
                <Segment basic>
                    <Button labelPosition="left" onClick={onGoBack} icon="left chevron" content="Back" />
                </Segment>
            </Grid.Row>
            <Grid.Row>
                <LoaderHelper
                    data={wether}
                    state={wetherState}
                    LoadingComponent={<Loader active />}
                    DataComponent={<WetherWidget wether={wether} />}
                    ErrorComponent={(
                        <Message negative>
                            <Message.Header>Something happened wrong!</Message.Header>
                            <p>{wetherError}</p>
                        </Message>
                    )}
                />
            </Grid.Row>
        </Grid>
    );
}

WetherPage.propTypes = {
    onGoBack    : PropTypes.func.isRequired,
    onGetWether : PropTypes.func.isRequired,
    location    : PropTypes.object.isRequired,
    wetherState : PropTypes.string,
    wetherError : PropTypes.any,
    wether      : PropTypes.object
};

WetherPage.defaultProps = {
    wetherState : null,
    wetherError : null,
    wether      : null
};

export default WetherPage;
