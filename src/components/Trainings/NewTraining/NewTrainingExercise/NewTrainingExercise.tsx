import React, {useContext, useState} from "react";
import {Formik, Form, Field} from 'formik';
import * as Yup from "yup";
import {
    TrainingWrapper,
    TrainingHeading,
    DropDownButton,
    SeriesWrapper,
    Series,
    SeriesContent,
    SeriesItem,
    ButtonWrapper
} from './NewTrainingExerciseStyles';
import {ArrowDropDown} from '@material-ui/icons';
import {Error} from '../../../../assets/styles/customStylesComponents/formComponents';
import {TrainingExercise, TrainingsContext} from "../../../../contexts/TrainingsContext";

interface Props {
    exercise: TrainingExercise;
}


const NewTrainingExercise: React.FC<Props> = ({exercise}) => {
    const {activeTraining} = useContext(TrainingsContext);
    const [isSeriesOpen, setIsSeriesOpen] = useState(false);

    console.log('exercises toDo: ', activeTraining.exercises);
    console.log('finished exercises: ', activeTraining.finishedExercises);

    const toggleSeriesOpen = () => {
        setIsSeriesOpen(prevState => !prevState);
    }

    const ExerciseFormSchema = Yup.object().shape({
        reps: Yup.string()
            .required('Reps are required'),
        weight: Yup.string()
            .required('Weight is required'),
        pause: Yup.string()
            .max(3, 'Are you sure??'),
        rate: Yup.string()
            .max(5, 'Too Long'),
    })
    return (
        <TrainingWrapper>
            <TrainingHeading>
                <h2>{exercise.exerciseName}</h2>
                <DropDownButton onClick={() => toggleSeriesOpen()} isOpen={isSeriesOpen}>
                    <ArrowDropDown/>
                </DropDownButton>
            </TrainingHeading>
            {exercise.series.map((series, index) => (
                <SeriesWrapper isOpen={isSeriesOpen} key={series._id}>
                    <Formik
                        initialValues={{
                            reps: series.reps.toString(),
                            weight: series.weight.toString(),
                            pause: series.pause.toString(),
                            rate: series.rate.toString()
                        }}
                        onSubmit={({reps, weight, pause, rate}) => {
                            console.log('on submit');
                        }}
                        validationSchema={ExerciseFormSchema}
                    >
                        {({errors, touched, isValid, dirty}) => (
                            <Form>
                                <Series>
                                    <SeriesContent>
                                        <SeriesItem width={20}>
                                            <p>{index + 1}.</p>
                                        </SeriesItem>
                                        <SeriesItem width={20}>
                                            <Field name='reps'/>
                                            {errors.reps && touched.reps ? (
                                                <Error>{errors.reps}</Error>
                                            ) : <Error></Error>}
                                        </SeriesItem>
                                        <SeriesItem width={20}>
                                            <Field name='weight'/>
                                            {errors.weight && touched.weight ? (
                                                <Error>{errors.weight}</Error>
                                            ) : <Error></Error>}
                                        </SeriesItem>
                                        <SeriesItem width={20}>
                                            <Field name='pause'/>
                                            {errors.pause && touched.pause ? (
                                                <Error>{errors.pause}</Error>
                                            ) : <Error></Error>}
                                        </SeriesItem>
                                        <SeriesItem width={20}>
                                            <Field name='rate'/>
                                            {errors.rate && touched.rate ? (
                                                <Error>{errors.rate}</Error>
                                            ) : <Error></Error>}
                                        </SeriesItem>
                                    </SeriesContent>
                                    <ButtonWrapper>
                                        <button type='submit'>Add</button>
                                    </ButtonWrapper>
                                </Series>
                            </Form>
                        )}
                    </Formik>
                </SeriesWrapper>
            ))}
        </TrainingWrapper>
    )
};

export default NewTrainingExercise;