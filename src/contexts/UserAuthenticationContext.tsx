import React, {useState, createContext, useEffect} from 'react';
import {onAddAuthorizationHeader, onDeleteAuthorizationHeader} from '../services/restService';
import {getTokenFromStorage, getUserIdFromStorage} from '../services/authenticationService';

interface AuthenticatedUserData {
    token: string,
    userId: string
}

interface ContextType {
    authenticatedUser: AuthenticatedUserData,
    onLogIn: (token: string, userId: string) => void,
    onLogOut: () => void
}

export const UserAuthenticationContext = createContext<ContextType>({} as ContextType);

const UserAuthenticationContextProvider: React.FC = ({children}) => {

    const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUserData>({} as AuthenticatedUserData);

    useEffect(() => {
        const token = getTokenFromStorage();
        const userId = getUserIdFromStorage();

        if(token && userId) {
            const authenticatedUser: AuthenticatedUserData = {
                token: token,
                userId: userId
            }

            setAuthenticatedUser(authenticatedUser);
        }
    }, [])


    const onLogIn = (token: string, userId: string) => {
        setAuthenticatedUser({token, userId});

        // Adding authorization header with valid token
        onAddAuthorizationHeader(token);
    }

    const onLogOut = () => {
        setAuthenticatedUser({} as AuthenticatedUserData);

        // Removing authorization header when during logout process
        onDeleteAuthorizationHeader();
    }

    return (
        <UserAuthenticationContext.Provider value={{authenticatedUser, onLogIn, onLogOut}}>
            {children}
        </UserAuthenticationContext.Provider>
    )
};

export default UserAuthenticationContextProvider;
