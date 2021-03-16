import React, {useState, createContext} from 'react';

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

    const onLogIn = (token: string, userId: string) => {
        setAuthenticatedUser({token, userId});
    }

    const onLogOut = () => {
        setAuthenticatedUser({} as AuthenticatedUserData);
    }

    return (
        <UserAuthenticationContext.Provider value={{authenticatedUser, onLogIn, onLogOut}}>
            {children}
        </UserAuthenticationContext.Provider>
    )
};

export default UserAuthenticationContextProvider;
