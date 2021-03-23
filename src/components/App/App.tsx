import React from 'react';
import GoogleFontLoader from "react-google-font-loader";
import GlobalStyle from "../../assets/styles/globalStyles";
import {Switch, Route} from "react-router";
import SignInController from "../SignIn/SignInController";
import SignUpController from "../SignUp/SignUpController";
import Dashboard from "../Dashboard/Dashboard";
import Calendar from "../Calendar/Calendar";
import Intro from "../Intro/Intro";
import Statistics from "../Statistics/Statistics";
import USerAccount from "../UserAccount/UserAccount";
import Settings from "../Settings/Settings";
import Exercises from "../Exercises/Exercises";
import PageNotFound from "../PageNotFound/PageNotFound";
import PrivateRoute from "../../utils/PrivateRoute";
import TrainingsController from "../Trainings/TrainingsController";



const App: React.FC = () => {

    return (

        <div className="App">
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Montserrat',
                        weights: [400, 500, 700],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek', 'latin']}
            />
            <GlobalStyle/>
            <Switch>
                <PrivateRoute
                    path='/dashboard'
                    exact
                    component={Dashboard}
                />
                <PrivateRoute
                    path='/trainings'
                    component={TrainingsController}
                />
                <PrivateRoute
                    path='/calendar'
                    exact
                    component={Calendar}
                />
                <PrivateRoute
                    path='/statistics'
                    exact
                    component={Statistics}
                />
                <PrivateRoute
                    path='/user-account'
                    exact
                    component={USerAccount}
                />
                <PrivateRoute
                    path='/settings'
                    exact
                    component={Settings}
                />
                <PrivateRoute
                    path='/exercises'
                    exact
                    component={Exercises}
                />
                <Route path="/sign-in" exact component={SignInController}/>
                <Route path="/sign-up" exact component={SignUpController}/>
                <Route path="/" exact component={Intro}/>
                <Route path="*" component={PageNotFound}/>
            </Switch>
        </div>
    );
}

export default App;
