import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "*INSERT THE API BASE HERE*",
        headers: {
            'Authorization': `${token}`,
        },
    });
};