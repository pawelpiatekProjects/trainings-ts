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
            <Switch>
                <Route path="/sign-in" component={SignInController}/>
                <Route path="/sign-up" component={SignUpController}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/trainings" component={Trainings}/>
                <Route path="/calendar" component={Calendar}/>
                <Route path="/statistics" component={Statistics}/>
                <Route path="/user-account" component={USerAccount}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/exercises" component={Exercises}/>
                <Route path="/" component={Intro}/>
            </Switch>
        </div>
    );
}

export default App;
