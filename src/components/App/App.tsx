import React from 'react';
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
import UserAuthenticationContextProvider from "../../contexts/UserAuthenticationContext";
import PageNotFound from "../PageNotFound/PageNotFound";


const App: React.FC = () => {
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
            <UserAuthenticationContextProvider>
                <Switch>
                    <Route path="/sign-in" exact component={SignInController}/>
                    <Route path="/sign-up" exact component={SignUpController}/>
                    <Route path="/dashboard" exact component={Dashboard}/>
                    <Route path="/trainings" exact component={Trainings}/>
                    <Route path="/calendar" exact component={Calendar}/>
                    <Route path="/statistics" exact component={Statistics}/>
                    <Route path="/user-account" exact component={USerAccount}/>
                    <Route path="/settings" exact component={Settings}/>
                    <Route path="/exercises" exact component={Exercises}/>
                    <Route path="/" exact component={Intro}/>
                    <Route path="*" component={PageNotFound}/>
                </Switch>
            </UserAuthenticationContextProvider>

        </div>
    );
}

export default App;
