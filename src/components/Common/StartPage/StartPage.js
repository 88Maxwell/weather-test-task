/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from "react";
import qs from "qs";
import PropTypes from "prop-types";
import {
    Grid, Loader, Message, Dropdown, Button, Segment, Header
} from "semantic-ui-react";
import WetherWidget from "../../Wether/WetherWidget";
import usePosition from "../../../hooks/usePosition";
import LoaderHelper from "../LoaderHelper";
import { cities } from "../../../domens/Wether/constants";

function StartPage({
    wetherState, wetherError, wether, onGetWether, onOpenWetherByCity, location
}) {
    const { position } = usePosition(false);
    const [ dropdownValue, setDropdownValue ] = useState(null);
    const [ warningVisible, setWarningVisible ] = useState(true);

    const { city } = qs.parse(location.search.slice(1));

    useEffect(() => {
        const { latitude: lat, longitude: lon } = position || {};

        if (city) {
            onGetWether({ city });
        } else {
            onGetWether({ lat, lon });
        }
    }, [ onGetWether, city, position ]);

    const handleDismissWarning = () => setWarningVisible(false);
    const handleChangeDropdownValue = (e, { value }) => setDropdownValue(value);
    const handleOpenWetherByCity = () => dropdownValue && onOpenWetherByCity({ city: dropdownValue });

    return (
        <Grid as="main" verticalAlign="middle" padded centered>
            <Grid.Row>
                {position ? (
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
                ) : (
                    warningVisible && (
                        <Message onDismiss={handleDismissWarning} warning>
                            <Message.Header>Please enable geolocation!</Message.Header>
                        </Message>
                    )
                )}
            </Grid.Row>

            <Grid.Row>
                <Segment>
                    <Header>Watch wether by city</Header>
                    <Dropdown
                        onChange={handleChangeDropdownValue}
                        options={cities}
                        placeholder="Choose an option"
                        selection
                        value={dropdownValue}
                    />
                    <Button disabled={!dropdownValue} onClick={handleOpenWetherByCity}>
                        Watch
                    </Button>
                </Segment>
            </Grid.Row>
        </Grid>
    );
}

StartPage.propTypes = {
    onOpenWetherByCity : PropTypes.func.isRequired,
    onGetWether        : PropTypes.func.isRequired,
    location           : PropTypes.object.isRequired,
    wetherState        : PropTypes.string,
    wetherError        : PropTypes.any,
    wether             : PropTypes.object
};

StartPage.defaultProps = {
    wetherState : null,
    wetherError : null,
    wether      : null
};

export default StartPage;
