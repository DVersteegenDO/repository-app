import Repository from "./Repository";

const resource = "/rdw";
export default {
    getResponse(data) {
        return Repository.get(`${resource}?${data}`);
    },
}