// function generateConfig() {
//     const {env} = process;

//     switch (env) {
//         case "production":

//             break;

//         case "development":

//                 break;

//         default:
//             throw "unavaible"
//     }
// }
// export default generateConfig();

export default {
    common : {
        storeLoggerEnabled : false
    },
    openWeatherMap : {
        apiUrl : "https://api.openweathermap.org",
        prefix : "data/2.5",
        appid  : "a57bae3a1ee62cc1d67d655a0eafcdbf"
    }
};
