import queryString from "query-string";

const defaultApiUrl = "http://localhost:3000/";
const defaultApiPrefix = "api/v1";

class RequestClient {
    constructor({ apiUrl = defaultApiUrl, prefix = defaultApiPrefix } = {}, queryObject = {}) {
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
