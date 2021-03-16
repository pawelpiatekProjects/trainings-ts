import axios from 'axios';

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

export function post<T>(endpoint: string, data?: PostDataSchema) {
    return instance.post<T>(endpoint, data);
}

export function get<T>(endpoint: string) {
    return instance.get<T>(endpoint);
}
