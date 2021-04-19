<h1 align="center" style="color:#F9C409">
  ⚙ Application during development ⚙

</h1>

<h1 align="center">
  Trainings App
</h1>

1. 💻 React.js / TypeScript / Hooks / Context
1. 🎨 Styled Components
1. 🔧 Express.js - Backend in another repository [Backend](https://github.com/pawelpiatekProjects/trainingsBackend)

<p align="center">
  <img  src="https://github.com/pawelpiatekProjects/trainings-ts/blob/master/intro.gif" width=60%/>
 </p>

<h1 align="center">
  Project description
</h1>

This app is a gym planer created with React.js and Typescript. This application is made for people who practice at the gym (especially powerlifting). It has two main features:
Managing user's training plans, Creating user's trainings history



<h1 align="center">
  Deeper dive into app's features
</h1>

<ul>
    <li>Training plans management</li>
    <p>
      <img  src="https://github.com/pawelpiatekProjects/trainings-ts/blob/master/training-plan.gif" width=60%/>
    </p>
    <ul>
        <li>Each user can create their own training plans base. Each training plan consists of: Training days (template for single training unit)
        and each Training day consists of Exercises.
        </li>
        <li>User has to enter all data by himself</li>
        <li>Created plans are only available for users who created them</li>
        <ul>
            <li style="color:#F9C409">⚙ In the future, I am going to add functionality which provides plans sharing ⚙</li>
        </ul>
        <li>Training plans data base is used as a template. User can start new training by picking selected training plan from 
        the list (more information in Trainings section)</li>
        <li>This feature provides also ability of editing and deleting each item (plans, training days, exercises)</li>
    </ul>
    <li>Trainings history</li>
    <p>
      <img  src="https://github.com/pawelpiatekProjects/trainings-ts/blob/master/trainings-list.gif" width=60%/>
    </p>
    <ul>
        <li>After creating training plan user can start workout by choosing plan and training day. He will redirected to where 
        will be the list of exercises, which he should do during gym training session</li>
        <li>User enter data about single series in each exercises. After confirming them, information are send to the backend and training is updating,
        </li>
    </ul>
    <li style="color:#F9C409">Exercises data base ⚙ During development ⚙</li>
    <ul>
        <li>
        In the future I want to provide feature which allows to create shared data base of exercises from which user can choose exercises during training plan creation process.
        </li>
    </ul>
    <li style="color:#F9C409">Trainings statistics ⚙ During development ⚙</li>
    <ul>
        <li>App will collects data from completed trainings and presents them in a user-friendly way (charts etc.)</li>
        <li>User can also enter his personal records in powerlifting (squat, bench press, dead lift)</li>
    </ul>
</ul>

<h1 align="center">
  Directory structure
</h1>

```angular2html
|-- src
    |-- assets
        |-- images
            |-- png
                |-- dashboard-background-large.png
            |-- svg
                |-- bar-chart.svg
                |-- dumbbell.svg
                |-- dumbbell-big.svg
                |-- heart.svg
                |-- home-hero.svg
                |-- line-chart.svg
                |-- sign-hero.svg
        |-- styles
            |-- customStylesComponents
                |-- backdrop.ts
                |-- buttons.ts
                |-- formComponents.ts
                |-- Timer.ts
            |-- globalStyles.ts
            |-- variables.ts
    |-- components
        |-- App
            |-- App.test.tsx
            |-- App.tsx
        |-- Calendar
            |-- Calendar.tsx
        |-- Dashboard
            |-- FirstChart
                |-- FirstChart.tsx
                |-- FirstChartStyles.ts
            |-- LastTraining
                |-- LastTraining.tsx
                |-- LastTrainingStyles.ts
            |-- PersonalRecords
                |-- PersonalRecords.tsx
                |-- PersonalRecordsStyles.ts
            |-- SecondChart
                |-- SecondChart.tsx
                |-- SecondChartStyles.ts
            |-- Dashboard.tsx
            |-- DashboardController.tsx
            |-- DashboardStyles.ts
        |-- Exercises
            |-- Exercises.tsx
        |-- Intro
            |-- HeroImg.tsx
            |-- Intro.tsx
            |-- IntroStyles.ts
        |-- Navigation
            |-- SideNavLeft
                |-- SideNavLeft.tsx
                |-- SideNavLeftController.tsx
                |-- SideNavLeftStyles.ts
            |-- TopNav
                |-- TopNav.tsx
                |-- TopNavController.tsx
                |-- TopNavStyles.ts
        |-- PageNotFound
            |-- PageNotFound.tsx
        |-- Settings
            |-- Settings.tsx
        |-- SignIn
            |-- SignIn
                |-- SignInForm
                    |-- SignInForm.tsx
                    |-- SignInFormStyles.ts
                |-- SignIn.tsx
                |-- SignInController.tsx
                |-- SignInStyles.ts
        |-- SignUp
            |-- SignUpForm
                |-- SignUpForm.tsx
                |-- SignUpFormStyles.tsx
            |-- SignUp.tsx
            |-- SignUpController.tsx
            |-- SignUpStyles.ts
        |-- Statistics
            |-- Statistics.tsx
        |-- Trainings
            |-- NewTraining
                |-- NewTrainingExercise
                    |-- NewTrainingExercise.tsx
                    |-- NewTrainingExerciseStyles.ts
                |-- Timer
                    |-- Timer.tsx
                |-- NewTraining.tsx
                |-- NewTrainingController.tsx
                |-- NewTrainingStyles.ts
            |-- TrainingPlans
                |-- CreateNewPlanForm
                    |-- CreateNewPlanForm.tsx
                |-- TrainingPlan
                    |-- TrainingDay
                        |-- Exercise
                            |-- Exercise.tsx
                            |-- ExerciseStyles.ts
                        |-- TrainingDay.tsx
                        |-- TrainingDayController.tsx
                        |-- TrainingDayStyles.ts
                    |-- TrainingPlan.tsx
                    |-- TrainingPlanController.tsx
                    |-- TrainingPlanStyles.ts
                |-- TrainingPlanCard
                    |-- TrainingPlanCard
                        |-- TrainingPlanCard.tsx
                        |-- TrainingPlanCardStyles.ts
                |-- TrainingPlans.tsx
                |-- TrainingPlansController.tsx
                |-- TrainingPlansStyles.ts
            |-- TrainingsList
                |-- TrainingData
                    |-- Exercise
                        |-- Exercise.tsx
                        |-- ExerciseStyles.ts
                    |-- TrainingData.tsx
                    |-- TrainingDataStyles.ts
                |-- TrainingIntro
                    |-- TrainingIntro.tsx
                    |-- TrainingIntroStyles.ts
                |-- TrainingListController.tsx
                |-- TrainingList.tsx
                |-- TrainingListStyles.ts
            |-- Trainings.tsx
            |-- TrainingsController.tsx
            |-- TrainingsStyles.ts
        |-- UserAccount
            |-- UserAccount.tsx
    |-- contexts
        |-- LoaderContext.tsx
        |-- PopUpContext.tsx
        |-- ToastContext.tsx
        |-- TrainingPlansContext.tsx
        |-- TrainingsContext.tsx
    |-- services
        |-- authenticationService.ts
        |-- restService.ts
    |-- utils
        |-- Loader
            |-- Loader.tsx
            |-- LoaderStyles.ts
        |-- PopUp
            |-- PopUpContent
                |-- CreatedAccount
                    |-- CreatedAccount.tsx
                    |-- CreatedAccountStyles.ts
                |-- DeleteItem
                    |-- DeleteExercise.tsx
                    |-- DeleteItemStyles.ts
                    |-- DeleteTrainingDay.tsx
                    |-- DeleteTrainingPlan.tsx
                |-- Error
                    |-- Error.tsx
                    |-- ErrorStyles.ts
                |-- ExerciseDescription
                    |-- ExerciseDescription.tsx
                    |-- ExerciseDescriptionStyles.ts
                |-- ExitTraining
                    |-- ExitTraining.tsx
                    |-- ExitTrainingStyles.ts
                |-- FinishTraining
                    |-- FinishTraining.tsx
                    |-- FinishTrainingStyles.ts
                |-- LogOut
                    |-- LogOut.tsx
                    |-- LogOutStyles.ts
                |-- NewTraining
                    |-- OpenedTrainingAlert
                        |-- OpenedTrainingAlert.tsx
                        |-- OpenedTrainingAlertStyles.ts
                    |-- TrainingDays
                        |-- TrainingDays.tsx
                        |-- TrainingDaysStyles.ts
                    |-- TrainingPlans
                        |-- TrainingPlans.tsx
                        |-- TrainingPlansStyles.ts
                    |-- NewTraining.tsx
                    |-- NewTrainingController.tsx
                    |-- NewTrainingStyles.ts
                |-- PlanForm
                    |-- PlanForm.tsx
                    |-- PlanFormStyles.ts
                |-- TrainingDayExerciseForm
                    |-- TrainingDayExerciseForm.tsx
                    |-- TrainingDayExerciseFormStyles.ts
                |-- TrainingDayForm
                    |-- TrainingDayForm.tsx
                    |-- TrainingDayFormStyles.ts
            |-- PopUp.tsx
            |-- PopUpController.tsx
            |-- PopUpStyles.ts
        |-- Spinner
            |-- Spinner.tsx
            |-- SpinnerStyles.ts
        |-- Toast
            |-- Toast.tsx
            |-- ToastStyles.ts
        |-- PrivateRedirect.tsx
        |-- PrivateRoute.tsx
        |-- SignInHeroImg.tsx
            
```

<h1 align="center">
  Directory structure explanation
</h1>

<ul>
    <li>assets - directory which contains: </li>
    <ul>
        <li>Images (svg and png)</li>
        <li>Styles: global styles, style variables and reusable styled components</li>
    </ul>
    <li>components - this directory contains all Functional Components. Components are grouped by functionalities and placed in separated folders.</li>
    <ul>
        <li>Code in components is divided into several files (2 or 3). Styled components were moved to ComponentStyles.ts file,
        business logic (if there was) was moved to ComponentController.tsx,  the rest of the component was moved to Component.txs file</li>
    </ul>
    <li>services - this directory contains 2 files: authenticationService, restService</li>
    <ul>
        <li>authenticationService - this file contains logic related to storing authentication data in Application Storage in Browser</li>    
        <li>restService - provides logic related with http requests. In this app I am using axiox for http requests. RestService contains 
        axios instance and some axios instance functions: function for adding authorization header with token to instance, httpInterceptor which is used for
        error handling and refreshing authorization token, modified get, post, put and delete functions</li>
    </ul>
    <li>utils - this directory contains reusable React Functional Components and modified components from react-router-dom (Route, Redirect) package which are
    modified for detecting whether user is authenticated</li>
</ul>
 
