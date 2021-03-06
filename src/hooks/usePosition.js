import { useState, useEffect } from "react";

const defaultSettings = {
    enableHighAccuracy : false,
    timeout            : Infinity,
    maximumAge         : 0
};

export default (watch = false, settings = defaultSettings) => {
    const [ position, setPosition ] = useState(null);
    const [ error, setError ] = useState(null);

    const onChange = ({ coords, timestamp }) => {
        setPosition({
            latitude  : coords.latitude,
            longitude : coords.longitude,
            accuracy  : coords.accuracy,
            timestamp
        });
    };

    const onError = (err) => {
        setError(err.message);
    };

    useEffect(() => {
        if (!navigator || !navigator.geolocation) {
            setError("Geolocation is not supported");

            return;
        }

        let watcher = null;

        if (watch) {
            watcher = navigator.geolocation.watchPosition(onChange, onError, settings);
        } else {
            navigator.geolocation.getCurrentPosition(onChange, onError, settings);
        }

        // eslint-disable-next-line consistent-return
        return () => watcher && navigator.geolocation.clearWatch(watcher);
    }, [ settings.enableHighAccuracy, settings.timeout, settings.maximumAge, settings, watch ]);

    return { position, error };
};
