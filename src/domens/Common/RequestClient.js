import queryString from "query-string";
import config from "../../config";

class RequestClient {
    constructor({ apiUrl = config.apiUrl, prefix = "api/v1" } = {}, queryObject = {}) {
        this.queryObject = queryObject;
        this.prefix = prefix;
        this.apiUrl = apiUrl;
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
        let queryObject = params;

        if (this.queryObject) {
            queryObject = { ...this.queryObject, ...params };
        }
        const query = `?${queryString.stringify(queryObject)}`;
        const fetchUrl = `${this.apiUrl}/${this.prefix}${url}${query}`;
        const response = await fetch(fetchUrl, {
            method,
            withCredentials : true,
            crossDomain     : true,
            body            : method !== "GET" ? JSON.stringify(body) : undefined
        });

        const json = await response.json();

        if (+json.cod !== 200) {
            throw json.message;
        }

        return json;
    }
}

export default RequestClient;
