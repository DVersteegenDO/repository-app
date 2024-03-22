import Repository from "./Repository";

const resource = "/user";

export default {
    register(credentials) {
        return Repository.post(`${resource}/register`,
            credentials
        );
    }
}
