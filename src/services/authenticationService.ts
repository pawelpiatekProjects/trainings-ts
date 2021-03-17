
export const storeAuthenticatedUser = (token: string, userId: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    const tokenExpirationDate = (new Date().getTime() + 3600 * 1000).toString();

    localStorage.setItem('expiresIn', tokenExpirationDate)

}

export const getTokenFromStorage = () => {
    return localStorage.getItem('token');
}

export const getUserIdFromStorage = () => {
    return localStorage.getItem('userId');
}

export const getTokenExpiration = () => {
    return localStorage.getItem('expiresIn');
}

export const clearAuthenticatedUSerData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expiresIn');
}

export const isUserAuthenticated = () => {

    const expirationDate = getTokenExpiration();
    if(expirationDate) {
        return parseInt(expirationDate) > new Date().getTime();
    }
    return expirationDate;
}
