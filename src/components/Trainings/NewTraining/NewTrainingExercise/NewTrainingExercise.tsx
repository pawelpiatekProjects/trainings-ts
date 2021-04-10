import React from "react";
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


const NewTrainingExercise: React.FC = () => {

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
                <h2>Squat</h2>
                <DropDownButton>
                    <ArrowDropDown/>
                </DropDownButton>
            </TrainingHeading>
            <SeriesWrapper>
                <Formik
                    initialValues={{
                        reps: '10',
                        weight: '120',
                        pause: '180',
                        rate: '3010'
                    }}
                    onSubmit={({reps, weight, pause, rate}) => {
                        console.log('on submit');
                    }}
                    validationSchema={ExerciseFormSchema}
                >
                    <Form>
                        <Series>
                            <SeriesContent>
                                <SeriesItem width={20}>1.</SeriesItem>
                                <SeriesItem width={20}>
                                    <Field name='reps'/>
                                </SeriesItem>
                                <SeriesItem width={20}>
                                    <Field name='weight'/>
                                </SeriesItem>
                                <SeriesItem width={20}>
                                    <Field name='pause'/>
                                </SeriesItem>
                                <SeriesItem width={20}>
                                    <Field name='rate'/>
                                </SeriesItem>
                            </SeriesContent>
                            <ButtonWrapper>
                                <button>Add</button>
                            </ButtonWrapper>
                        </Series>
                    </Form>

                </Formik>
            </SeriesWrapper>
        </TrainingWrapper>
    )
};

export default NewTrainingExercise;