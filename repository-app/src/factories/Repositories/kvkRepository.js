import Repository from "./Repository";

const resource = "/kvk";
// const data = {
//     postcode: '5962AG',
//     huisnummer: 10
// }

export default {
    getResponse() {
        return Repository.get(`${resource}`);
    },

    searchCompany(data) {
        return Repository.get(`${resource}/company?${data}`);
    },

    // postTest() {
    //     return Repository.post(`${resource}/company?`, {
    //         postcode: '5962AG',
    //         huisnummer: 10
    //     });
    // },

    postTest(data) {
        return Repository.post(`${resource}/company?`, {
            data
        });
    },
}
