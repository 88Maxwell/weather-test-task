import queryString from "query-string";
import config from "../config";

class RequestClient {
    constructor({ prefix = "api/v1" } = {}) {
        this.prefix = prefix;
        this.token = "";
        [ "get", "post", "patch", "delete" ].forEach((method) => {
            this[method] = async (url, data, params) => this.request({
                method : method.toUpperCase(),
                body   : data,
                url,
                params
            });
        });
    }

    async request({
        url, method, body, params = {}
    }) {
        if (this.token) {
            // eslint-disable-next-line
            params.token = this.token;
        }
        const queryParams = Object.keys(params).length
            ? { ...params, developer: config.developer }
            : { developer: config.developer };
        const query = `?${queryString.stringify(queryParams)}`;

        const formData = new FormData();

        // eslint-disable-next-line
        for (const name in body) {
            formData.append(name, body[name]);
        }

        const response = await fetch(`${config.apiUrl}/${this.prefix}${url}${query}`, {
            method,
            withCredentials : true,
            crossDomain     : true,
            body            : method !== "GET" ? formData : undefined
        });

        const json = await response.json();

        if (json.status !== "ok") throw json.error;

        return json.message;
    }

    setToken(token) {
        this.token = token;
    }
}

export default RequestClient;
