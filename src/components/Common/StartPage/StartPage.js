/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from "react";
import qs from "qs";
import PropTypes from "prop-types";
import {
    Grid, Loader, Message, Dropdown, Segment, Header
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import WeatherWidget from "../../Weather/WeatherWidget";
import usePosition from "../../../hooks/usePosition";
import LoaderHelper from "../LoaderHelper";
import { cities } from "../../../domens/Weather/constants";

function StartPage({
    weatherState, weatherError, weather, onGetWeather, location
}) {
    const { position } = usePosition(false);
    const [ warningVisible, setWarningVisible ] = useState(true);

    const { city } = qs.parse(location.search.slice(1));

    useEffect(() => {
        const { latitude: lat, longitude: lon } = position || {};

        if (city) {
            onGetWeather({ city });
        } else {
            onGetWeather({ lat, lon });
        }
    }, [ onGetWeather, city, position ]);

    const handleDismissWarning = () => setWarningVisible(false);

    return (
        <Grid as="main" verticalAlign="middle" padded centered>
            <Grid.Row>
                {position ? (
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
                    <Header>Watch weather by city</Header>
                    <Dropdown text="Choose an option">
                        <Dropdown.Menu>
                            {cities.map((el) => (
                                <Link
                                    key={el.text}
                                    component={Dropdown.Item}
                                    to={`/weather?city=${el.value}`}
                                >
                                    {el.text}
                                </Link>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Segment>
            </Grid.Row>
        </Grid>
    );
}

StartPage.propTypes = {
    onGetWeather : PropTypes.func.isRequired,
    location     : PropTypes.object.isRequired,
    weatherState : PropTypes.string,
    weatherError : PropTypes.any,
    weather      : PropTypes.object
};

StartPage.defaultProps = {
    weatherState : null,
    weatherError : null,
    weather      : null
};

export default StartPage;
