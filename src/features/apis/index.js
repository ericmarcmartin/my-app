import axios from "axios";

const api = axios.create({
    baseURL: 'https://611cc3e6c7035d001754118f.mockapi.io/api',
});

export default api;