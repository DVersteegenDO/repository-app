import Repository from "./Repository";

const resource = "/kvk";

export default {
    getResponse() {
        return Repository.get(`${resource}`);
    },

    postTest(data) {
        return Repository.post(`${resource}/company?`,
            data
        );
    }
}
