import axios from 'axios';

const axiosServices = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3050',
    headers: {
        common: {
            Authorization: ''
        },
        post: {
            'Content-Type': 'application/json'
        }
    }
});

// interceptor for http
axiosServices.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error.response);
        let error_msg = 'Failed to Connect Server! Check your internet connection';

        if (error.response && error.response.status) {
            switch (error.response.status) {
                case 400:
                    error_msg = 'Request seems to be Broken';
                    break;
                case 401:
                    error_msg = 'User Details Not Found';
                    break;
                case 403:
                    error_msg = 'Forbidden Request';
                    break;
                case 406:
                    error_msg = 'Token Seems to Manipulated';
                    break;
                case 500:
                    error_msg = 'Invalid URL';
            }
        }
        return Promise.reject(error_msg);
    }
);

export default axiosServices;
