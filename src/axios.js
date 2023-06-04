import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL :
        "https://api-vill-mill.abramov.pw/api/",
        //"http://localhost:5003/api/",
});

instance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${window.localStorage.getItem("token")}`
    return config;
});

export default instance;
