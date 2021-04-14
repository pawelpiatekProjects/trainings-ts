import axios from 'axios';
import {
    clearAuthenticatedUSerData,
    getTokenFromStorage,
    getRefreshTokenFromStorage,
    getUserIdFromStorage, storeAuthenticatedUser
} from './authenticationService';

interface DataSchema {
    [key: string]: string
}

const instance = axios.create({
    baseURL: 'http://localhost:8080/'
});

// Adding authorization token header to axios instance after getting token
export const onAddAuthorizationHeader = (token: string) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Deleting authorization token header from axios instance (logout)
export const onDeleteAuthorizationHeader = () => {
    delete instance.defaults.headers.common['Authorization'];
}

export function post<T>(endpoint: string, data?: DataSchema) {
    const token = getTokenFromStorage();
    if (token) {
        onAddAuthorizationHeader(token);
    }
    return instance.post<T>(endpoint, data);
}

export function get<T>(endpoint: string) {
    const token = getTokenFromStorage();
    if (token) {
        onAddAuthorizationHeader(token);
    }
    return instance.get<T>(endpoint);
}

export function deleteRequest<T>(endpoint: string, params: DataSchema) {
    const token = getTokenFromStorage();
    if (token) {
        onAddAuthorizationHeader(token);
    }
    return instance.delete<T>(endpoint, {
        params: params
    });
}

export function put<T>(endpoint: string, data: DataSchema) {
    const token = getTokenFromStorage();
    if (token) {
        onAddAuthorizationHeader(token);
    }
    return instance.put<T>(endpoint, {
        params: data
    });
}

instance.interceptors.response.use(response => response, error => {
    if (error.response.status === 401) {
        const refreshToken = getRefreshTokenFromStorage()!;
        const userId = getUserIdFromStorage()!;
        post<any>('auth/refreshToken', {
            refrshToken: refreshToken,
            userId: userId
        }).then(({data: {token, refreshToken, userId}}) => {
            clearAuthenticatedUSerData();
            storeAuthenticatedUser(token, userId, refreshToken);
            onAddAuthorizationHeader(token);
        })

    }
})


