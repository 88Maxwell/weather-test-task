/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from "react";
import qs from "qs";
import PropTypes from "prop-types";
import {
    Grid, Loader, Message, Dropdown, Button, Segment, Header
} from "semantic-ui-react";
import WetherWidget from "../WetherWidget";
import usePosition from "../../../hooks/usePosition";
import LoaderHelper from "../../Common/LoaderHelper";
import { cities } from "../../../domens/Wether/constants";
import config from "../../../config";

function WetherPage({
    wetherState, wetherError, wether, onGetWether, onGoBack, onOpenWetherByCity, location
}) {
    const { position } = usePosition(false);
    const [ dropdownValue, setDropdownValue ] = useState(null);
    const [ warningVisible, setWarningVisible ] = useState(true);

    const { search, pathname } = location;
    const isCustomCity = !((pathname === "/" || pathname === config.common.publicUrl) && search === "");
    const { city } = qs.parse(search.slice(1));

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
        <Grid as="main" verticalAlign="middle" container centered>
            <Grid.Row>
                {isCustomCity && (
                    <Segment basic>
                        <Button labelPosition="left" onClick={onGoBack} icon="left chevron" content="Back" />
                    </Segment>
                )}
            </Grid.Row>
            <Grid.Row>
                {position || isCustomCity ? (
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
                <Segment basic>
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

WetherPage.propTypes = {
    onGoBack           : PropTypes.func.isRequired,
    onOpenWetherByCity : PropTypes.func.isRequired,
    onGetWether        : PropTypes.func.isRequired,
    location           : PropTypes.object.isRequired,
    wetherState        : PropTypes.string,
    wetherError        : PropTypes.any,
    wether             : PropTypes.object
};

WetherPage.defaultProps = {
    wetherState : null,
    wetherError : null,
    wether      : null
};

export default WetherPage;
