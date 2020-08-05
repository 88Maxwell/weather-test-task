/* eslint-disable dot-notation */
export const messages = {
    cities : {
        Kyiv    : () => "Kyiv",
        Lviv    : () => "Lviv",
        Odessa  : () => "Odessa",
        Kharkiv : () => "Kharkiv"
    }
};


export const cities = [
    { value: "Kyiv", text: messages.cities["Kyiv"] },
    { value: "Lviv", text: messages.cities["Lviv"] },
    { value: "Odesa", text: messages.cities["Odessa"] },
    { value: "Kharkiv", text: messages.cities["Kharkiv"] }
];
