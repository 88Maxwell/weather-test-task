/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from "react";
import qs from "qs";
import PropTypes from "prop-types";
import {
    Grid, Loader, Message, Dropdown, Button, Menu, Icon, Sidebar, Segment, Header
} from "semantic-ui-react";
import styles from "./styles.module.css";
import WetherWidget from "../../widgets/WetherWidget";
import { usePosition } from "../../../hooks/usePosition";
import LoaderHelper from "../../widgets/LoaderHelper";
import { cities } from "./constants";

function StartPage({
    wetherState, wetherError, wether, onGetWether, onGoBack, onOpenWetherByCity, location
}) {
    const { position } = usePosition(false);
    const [ dropdownValue, setDropdownValue ] = useState(null);
    const [ warningVisible, setWarningVisible ] = useState(true);

    const { search, pathname } = location;
    const isSidebarVisible = !(pathname === "/" && search === "");
    const { city } = qs.parse(search.slice(1));

    useEffect(() => {
        const { latitude: lat, longitude: lon } = position || {};

        if (city) {
            onGetWether({ city });
        } else {
            onGetWether({ lat, lon });
        }
    }, [ onGetWether, search ]);

    const handleDismissWarning = () => setWarningVisible(false);
    const handleChangeDropdownValue = (e, { value }) => setDropdownValue(value);
    const handleOpenWetherByCity = () => dropdownValue && onOpenWetherByCity({ city: dropdownValue });

    return (
        <main>
            <Sidebar.Pushable className={styles.wrapper}>
                <Sidebar
                    as={Menu}
                    animation="overlay"
                    icon="labeled"
                    inverted
                    vertical
                    visible={isSidebarVisible}
                    width="thin"
                >
                    <Menu.Item onClick={onGoBack} labelPosition="left">
                        <Icon name="arrow left" />
                        Back
                    </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher basic as={Segment}>
                    <Grid container centered verticalAlign="middle">
                        <Grid.Column>
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
                        </Grid.Column>
                    </Grid>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </main>
    );
}

StartPage.propTypes = {
    onGoBack           : PropTypes.func.isRequired,
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
