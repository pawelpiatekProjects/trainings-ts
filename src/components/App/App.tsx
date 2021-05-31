import React from 'react';
import GoogleFontLoader from "react-google-font-loader";
import GlobalStyle from "../../assets/styles/globalStyles";
import {Switch, Route} from "react-router";
import SignInController from "../SignIn/SignInController";
import SignUpController from "../SignUp/SignUpController";
import DashboardController from "../Dashboard/DashboardController";
import Calendar from "../Calendar/Calendar";
import Intro from "../Intro/Intro";
import Statistics from "../Statistics/Statistics";
import USerAccount from "../UserAccount/UserAccount";
import Settings from "../Settings/Settings";
import Exercises from "../Exercises/Exercises";
import PageNotFound from "../PageNotFound/PageNotFound";
import PrivateRoute from "../../utils/PrivateRoute";
import TrainingsController from "../Trainings/TrainingsController";
import ToastContextProvider from "../../contexts/ToastContext";
import PopUpContextProvider from "../../contexts/PopUpContext";
import PopUpController from "../../utils/PopUp/PopUpController";
import TrainingPlanContextProvider from "../../contexts/TrainingPlansContext";
import Toast from "../../utils/Toast/Toast";
import Loader from "../../utils/Loader/Loader";
import LoaderContextProvider from "../../contexts/LoaderContext";
import TrainingsContextProvider from "../../contexts/TrainingsContext";
import ErrorContextProvider from "../../contexts/ErrorContext";


const App: React.FC = () => {

    return (
        <div className="App">
            <ErrorContextProvider>
                <LoaderContextProvider>
                    <ToastContextProvider>
                        <TrainingPlanContextProvider>
                            <TrainingsContextProvider>
                                <PopUpContextProvider>

                                    <Loader/>
                                    <PopUpController/>
                                    <Toast/>
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
                                            component={DashboardController}
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

                                </PopUpContextProvider>
                            </TrainingsContextProvider>
                        </TrainingPlanContextProvider>
                    </ToastContextProvider>
                </LoaderContextProvider>
            </ErrorContextProvider>
        </div>
    );
}

export default App;
