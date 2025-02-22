import axios from 'axios';

const axiosInstance = () => {
    const baseUrl = '';
    return axios.create({
        baseURL: baseUrl,
        responseType: 'json',
    });
};

const api = axiosInstance();

export default api;
