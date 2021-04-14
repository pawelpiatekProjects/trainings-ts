import {post} from "./restService";

export const storeAuthenticatedUser = (token: string, userId: string, refreshToken: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('refreshToken', refreshToken);
    // const tokenExpirationDate = (new Date().getTime() + 1800000).toString();
    // localStorage.setItem('expiresIn', tokenExpirationDate)

}

export const getTokenFromStorage = () => {
    return localStorage.getItem('token');
}

export const getRefreshTokenFromStorage = () => {
    return localStorage.getItem('refreshToken');
}

export const getUserIdFromStorage = () => {
    return localStorage.getItem('userId');
}

export const getTokenExpiration = () => {
    return localStorage.getItem('expiresIn');
}

export const getUSerIdFromStorage = () => {
    return localStorage.getItem('userId');
}

export const clearAuthenticatedUSerData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('expiresIn');
}

export const isUserAuthenticated = () => {
    const expirationDate = getTokenExpiration();
    const token = getTokenFromStorage()!;
    return !!token;
}


