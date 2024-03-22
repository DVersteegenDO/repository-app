import axios from "axios";

const baseDomain = "http://192.168.56.56";
const baseURL = `${baseDomain}/api`;

// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzZmYmI1OGE3MjBlYWY4MTBhYzVmODg0ZDQ3NWFjZTJkYWVlYjk0ODllMjYzMzg4MmMwZWQzODRhYWIwYWZmYzJlMGY4NTFlZjdjOTg2N2IiLCJpYXQiOjE3MTExMDE2MDQuMzc1NjExLCJuYmYiOjE3MTExMDE2MDQuMzc1NjE1LCJleHAiOjE3NDI2Mzc2MDQuMTYzMDM3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Hd3RE4niMP_-YCndFzwNuKAeJEAv4XQjlD2I5crUpViPHC9-FGDdn5IN1dbuonxhFrYp4a2tqwO-Enlx4hLsqGZK9GDHsEvKA6CXKVTe7LFLl3sV8q87LoJ_9cLBe1amhDetv685etXDqgWV8DfaizH5Sww54NcaM4Qe6fclT_Qh7H8oayqq6DTnfFkJ4X0505QyMj4CiFWLsQPcwLOhWv7LFH3112D2BUxOHo4uKMFHFc5A9aXvQ9xvu1xtp5kCrGv7bkt6kuaBKi5_6MK91knhl6kCeJ3Oq49Y3h0B8Q5zshdV2RgUXVTWqGlmZcSl4VE0YpHipc4Mqwb60LplgOWbkQ8s4Ru7R8J7-h4KmZ4u9TUlaWbrKd95F5QEUWhJaJzotMdx_le9quTFxs2pmh_OhkO9TwMxCBcwLt4QdVw0HwCHsytu2k-W_q_i2N4mayMMKy3kFXNPgFjQCjqwprlRxGVpIEdnn1U-dwyfhbuqaY1mLdISKdd40EaE16G7Z8oao-KEJfNxns6j1Q7Y2R6eTbGBXNZU3UKtHWre8y02AC5GA43nlURNtgIOTksXqYTL63ROt0uLIcRx-UT8C5uHkGJuxj9Wqsjl19MDiWxyzOTHcDSkSSge11CVQbsVrJW4ue6gk83tkd_pHtC3w3wf04GFlTWM5JmiRr-V4lA";
// const headers = {
//     'Authorization': `Bearer ${token}`,
// };

export default axios.create({
    baseURL,
    // headers
});