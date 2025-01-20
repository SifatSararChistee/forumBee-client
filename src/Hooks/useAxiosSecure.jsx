import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    const getToken = () => localStorage.getItem('access-token');

    // Clear existing interceptors to prevent duplication
    axiosSecure.interceptors.request.handlers = [];
    axiosSecure.interceptors.response.handlers = [];

    // Request interceptor
    axiosSecure.interceptors.request.use(
        (config) => {
            const token = getToken();
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // Response interceptor
    axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
            const status = error.response?.status;
            if (status === 401 || status === 403) {
                await logOut();
                navigate('/login');
            }
            console.error('Interceptor Error:', error.response || error);
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;
