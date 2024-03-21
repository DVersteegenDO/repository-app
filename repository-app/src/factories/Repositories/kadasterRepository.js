import Repository from "./Repository";

const resource = "/kadaster";
export default {
    getResponse() {
        return Repository.get(`${resource}`);
    },

    // getResponse() {
    //     return Repository.get(`${resource}`);
    // },
}