import React, {useState} from "react";
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


const NewTrainingExercise: React.FC = () => {

    const [isSeriesOpen, setIsSeriesOpen] = useState(false);

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
                <h2>Squat</h2>
                <DropDownButton onClick={() => toggleSeriesOpen()} isOpen={isSeriesOpen}>
                    <ArrowDropDown/>
                </DropDownButton>
            </TrainingHeading>
            <SeriesWrapper isOpen={isSeriesOpen}>
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
                    {({errors, touched, isValid, dirty}) => (
                        <Form>
                            <Series>
                                <SeriesContent>
                                    <SeriesItem width={20}>
                                        <p>1.</p>
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
                                    <button>Add</button>
                                </ButtonWrapper>
                            </Series>
                        </Form>
                    )}
                </Formik>
            </SeriesWrapper>
        </TrainingWrapper>
    )
};

export default NewTrainingExercise;