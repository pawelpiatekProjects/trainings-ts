import React, {useContext} from 'react';
import GoogleFontLoader from "react-google-font-loader";
import GlobalStyle from "../../assets/styles/globalStyles";
import {Switch, Route} from "react-router";
import SignInController from "../SignIn/SignInController";
import SignUpController from "../SignUp/SignUpController";
import Dashboard from "../Dashboard/Dashboard";
import Trainings from "../Trainings/Trainings";
import Calendar from "../Calendar/Calendar";
import Intro from "../Intro/Intro";
import Statistics from "../Statistics/Statistics";
import USerAccount from "../UserAccount/UserAccount";
import Settings from "../Settings/Settings";
import Exercises from "../Exercises/Exercises";
import UserAuthenticationContextProvider, {UserAuthenticationContext} from "../../contexts/UserAuthenticationContext";
import PageNotFound from "../PageNotFound/PageNotFound";
import PrivateRoute from "../../utils/PrivateRoute";


const App: React.FC = () => {

    const {authenticatedUser} = useContext(UserAuthenticationContext);
    const isAuthenticated = Object.keys(authenticatedUser).length > 0;
    console.log('is authenticated: ', isAuthenticated);

    return (
        <div className="App">
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Montserrat',
                        weights: [400, 700],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek', 'latin']}
            />
            <GlobalStyle/>
            <Switch>
                <Route path="/sign-in" exact component={SignInController}/>
                <Route path="/sign-up" exact component={SignUpController}/>
                <PrivateRoute
                    path='/dashboard'
                    exact
                    isAuthenticated={isAuthenticated}
                    component={Dashboard}
                />
                <PrivateRoute
                    path='/trainings'
                    exact
                    isAuthenticated={isAuthenticated}
                    component={Trainings}
                />
                <PrivateRoute
                    path='/calendar'
                    exact
                    isAuthenticated={isAuthenticated}
                    component={Calendar}
                />
                <PrivateRoute
                    path='/statistics'
                    exact
                    isAuthenticated={isAuthenticated}
                    component={Statistics}
                />
                <PrivateRoute
                    path='/user-account'
                    exact
                    isAuthenticated={isAuthenticated}
                    component={USerAccount}
                />
                <PrivateRoute
                    path='/settings'
                    exact
                    isAuthenticated={isAuthenticated}
                    component={Settings}
                />
                <PrivateRoute
                    path='/exercises'
                    exact
                    isAuthenticated={isAuthenticated}
                    component={Exercises}
                />
                <Route path="/" exact component={Intro}/>
                <Route path="*" component={PageNotFound}/>
            </Switch>
        </div>
    );
}

export default App;
