/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import styles from "./styles.module.css";
import WetherCard from "../../widgets/WetherCard";
import { usePosition } from "../../../hooks/usePosition";

function StartPage({
    wetherState, wetherError, wether, onGetWether
}) {
    const { position, error } = usePosition(false);

    useEffect(async () => {
        const { latitude: lat, longitude: lon } = position || {};

        onGetWether({ lat, lon });
    }, [ onGetWether ]);

    console.log("wetherState :>> ", wetherState);
    console.log("wetherError :>> ", wetherError);
    console.log("wether :>> ", wether);

    return (
        <main className={styles.wrapper}>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <WetherCard />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </main>
    );
}

StartPage.propTypes = {
    onGetWether : PropTypes.func.isRequired,
    wetherState : PropTypes.string,
    wetherError : PropTypes.any,
    wether      : PropTypes.object
};

StartPage.defaultProps = {
    wetherState : null,
    wetherError : null,
    wether      : null
};

export default StartPage;
