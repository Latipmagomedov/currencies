import api from "./api";

const currencies = {
    getCurrencies(query) {
        return api.get("/currency_data/convert", {params: query});
    },
    getCurrenciesList() {
        return api.get("/currency_data/list");
    },
    getCurrenciesLive(query) {
        return api.get("/currency_data/live", {params: query});
    }
};

export default currencies;
