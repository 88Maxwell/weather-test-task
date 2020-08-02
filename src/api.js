import RequestClient from "./utils/RequestClient";

const openWetherApiMapRequest = new RequestClient();

export const task = {
    list   : (params) => openWetherApiMapRequest.get("/", null, params),
    create : (data) => openWetherApiMapRequest.post("/create", data),
    update : (data) => openWetherApiMapRequest.post(`/edit/${data.id}`, data)
};

export const user = {
    login : (data) => openWetherApiMapRequest.post("/login", data)
};
