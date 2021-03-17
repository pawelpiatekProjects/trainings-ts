import axios from 'axios';
import {clearAuthenticatedUSerData} from './authenticationService';

interface PostDataSchema {
    [key: string]: string
}

const instance = axios.create({
    baseURL: 'http://localhost:8080/'
});

// Adding authorization token header to axios instance after getting token
export const onAddAuthorizationHeader = (token: string) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ' + ${token}`;
}

// Deleting authorization token header from axios instance (logout)
export const onDeleteAuthorizationHeader = () => {
    delete instance.defaults.headers.common['Authorization'];
}

export function post<T>(endpoint: string, data?: PostDataSchema) {
    return instance.post<T>(endpoint, data);
}

export function get<T>(endpoint: string) {
    return instance.get<T>(endpoint);
}

instance.interceptors.response.use(response=> response, error => {
    if(error.response.status === 401) {
        clearAuthenticatedUSerData();
    }
})


