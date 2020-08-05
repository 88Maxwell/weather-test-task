/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from "react";
import qs from "qs";
import PropTypes from "prop-types";
import {
    Grid, Loader, Message, Button, Segment
} from "semantic-ui-react";
import WeatherWidget from "../WeatherWidget";
import LoaderHelper from "../../Common/LoaderHelper";
import usePosition from "../../../hooks/usePosition";

function WeatherPage({
    weatherState, weatherError, weather, onGetWeather, onGoBack, location
}) {
    const { position } = usePosition(false);
    const { search } = location;
    const { city } = qs.parse(search.slice(1));

    useEffect(() => {
        const { latitude: lat, longitude: lon } = position || {};

        if (city) {
            onGetWeather({ city });
        } else {
            onGetWeather({ lat, lon });
        }
    }, [ onGetWeather, city, position ]);


    return (
        <Grid as="main" verticalAlign="middle" padded centered>
            <Grid.Row>
                <Segment basic>
                    <Button labelPosition="left" onClick={onGoBack} icon="left chevron" content="Back" />
                </Segment>
            </Grid.Row>
            <Grid.Row>
                <LoaderHelper
                    data={weather}
                    state={weatherState}
                    LoadingComponent={<Loader active />}
                    DataComponent={<WeatherWidget weather={weather} />}
                    ErrorComponent={(
                        <Message negative>
                            <Message.Header>Something happened wrong!</Message.Header>
                            <p>{weatherError}</p>
                        </Message>
                    )}
                />
            </Grid.Row>
        </Grid>
    );
}

WeatherPage.propTypes = {
    onGoBack     : PropTypes.func.isRequired,
    onGetWeather : PropTypes.func.isRequired,
    location     : PropTypes.object.isRequired,
    weatherState : PropTypes.string,
    weatherError : PropTypes.any,
    weather      : PropTypes.object
};

WeatherPage.defaultProps = {
    weatherState : null,
    weatherError : null,
    weather      : null
};

export default WeatherPage;
