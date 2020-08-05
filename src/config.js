const {
    REACT_APP_API_URL,
    REACT_APP_PREFIX,
    REACT_APP_APP_ID
} = process.env;

export default {
    common : {
        publicUrl : process.env.REACT_APP_PUBLIC_URL
    },
    openWeatherMap : {
        apiUrl : REACT_APP_API_URL,
        prefix : REACT_APP_PREFIX,
        appid  : REACT_APP_APP_ID
    }
};
