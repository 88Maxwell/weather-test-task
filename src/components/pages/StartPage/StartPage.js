/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, Loader, Message } from "semantic-ui-react";
import styles from "./styles.module.css";
import WetherCard from "../../widgets/WetherCard";
import { usePosition } from "../../../hooks/usePosition";

function StartPage({
    wetherState, wetherError, wether, onGetWether
}) {
    const { position } = usePosition(false);

    useEffect(() => {
        const { latitude: lat, longitude: lon } = position || {};

        onGetWether({ lat, lon });
    }, [ onGetWether ]);

    return (
        <main className={styles.wrapper}>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        {!wether && wetherState === "loading" && <Loader active />}
                        {wether && wetherState === "loaded" && <WetherCard />}
                        {!wether && wetherState === "error" && (
                            <Message negative>
                                <Message.Header>Something happened wrong!</Message.Header>
                                <p>{wetherError}</p>
                            </Message>
                        )}
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
