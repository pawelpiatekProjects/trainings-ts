import React, {useContext, useState} from 'react';
import {
    FormWrapper,
    CustomImagePickerWrapper,
    CustomImagePicker,
    SelectedImage,
    Button,
    ImageSelect,
    ImageOption
} from './PlanFormStyles';
import {Formik, Form, Field} from 'formik';
import {
    FormHeader,
    FieldLabel,
    FieldWrapper,
    Error
} from '../../../../assets/styles/customStylesComponents/formComponents';
import {SecondaryButton} from '../../../../assets/styles/customStylesComponents/buttons';
import * as Yup from "yup";
import {TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import {PopUpContext} from "../../../../contexts/PopUpContext";
import {ToastContext} from "../../../../contexts/ToastContext";
import {ArrowDropDown} from '@material-ui/icons';
import  BarChartImg from '../../../../assets/images/svg/bar-chart.svg';
import  DumbbellImg from '../../../../assets/images/svg/dummbell.svg';
import  HeartImg from '../../../../assets/images/svg/heart.svg';
import  LineChartImg from '../../../../assets/images/svg/line-chart.svg';


const PlanForm: React.FC = () => {
    const {onCreateNewPlan, openedPlan, onEditTrainingPlan} = useContext(TrainingPlanContext);
    const {onCloseModal, popUpConfig} = useContext(PopUpContext);
    const {emitNewMessage} = useContext(ToastContext);

    const [isPickerOpen, setPickerOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState('BarChartImg');

    const togglePicker = () => {
        setPickerOpen(prevState => !prevState);
    }

    const selectImg = (name: string) => {
        togglePicker();
        setSelectedImg(name);
    }

    const getDisplayedImageSrc = () => {
        let result;
        switch (selectedImg) {
            case 'BarChart': {
                result = BarChartImg;
                break
            }
        }
        return result
    }

    const mode = popUpConfig.openModalData!.mode!;

    const NewPlanSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short')
            .max(50, 'Too Long')
            .required('Name is required'),
        description: Yup.string()
            .max(250, 'Too Long'),
        image: Yup.string()
            .required('Image is required'),
    });

    return (
        <FormWrapper>
            <FormHeader>{mode === 'edit' ? 'Edit' : 'Create'} Plan</FormHeader>
            <Formik initialValues={{
                name: mode === 'edit' ? openedPlan.trainingPlanName : '',
                description: mode === 'edit' ? openedPlan.description : '',
                image: mode === 'edit' ? openedPlan.image : ''
            }}
                    enableReinitialize={true}
                    validationSchema={NewPlanSchema}
                    onSubmit={({name, description, image}, {resetForm}) => {
                        if (mode === 'edit') {
                            onEditTrainingPlan(name, image, description!);
                        } else {
                            onCreateNewPlan(name, image, description!);
                            emitNewMessage('Created training plan')
                        }
                        onCloseModal();
                        resetForm();
                    }}
            >
                {({errors, touched, isValid, dirty}) => (
                    <Form>
                        <FieldLabel>name</FieldLabel>
                        <FieldWrapper isError={errors.name} touched={touched.name}>
                            <Field name='name' placeholder='plan name'/>
                        </FieldWrapper>
                        {errors.name && touched.name ? (
                            <Error>{errors.name}</Error>
                        ) : <Error></Error>}

                        <FieldLabel>plan image</FieldLabel>
                        <CustomImagePickerWrapper>
                            <Field name='image' value={selectedImg}/>
                            <CustomImagePicker>
                                <SelectedImage>
                                    {selectedImg}
                                </SelectedImage>
                                <Button onClick={() => togglePicker()}>
                                    <ArrowDropDown/>
                                </Button>
                            </CustomImagePicker>
                            <ImageSelect isOpen={isPickerOpen}>
                                <ImageOption>
                                    <img
                                        onClick={() => selectImg('BarChartImg')}
                                        src={BarChartImg} alt="BarChart"
                                    />
                                </ImageOption>
                                <ImageOption>
                                    <img
                                        onClick={() => selectImg('Dumbbell')}
                                        src={DumbbellImg} alt="Dumbbell"
                                    />
                                </ImageOption>
                                <ImageOption>
                                    <img
                                        onClick={() => selectImg('Heart')}
                                        src={HeartImg} alt="Heart"
                                    />
                                </ImageOption>
                                <ImageOption>
                                    <img
                                        onClick={() => selectImg('LineChart')}
                                        src={LineChartImg} alt="LineChart"
                                    />
                                </ImageOption>
                            </ImageSelect>
                        </CustomImagePickerWrapper>

                        {/*{errors.image && touched.image ? (*/}
                        {/*    <Error>{errors.image}</Error>*/}
                        {/*) : <Error></Error>}*/}

                        <FieldLabel>description</FieldLabel>
                        <FieldWrapper isError={errors.description} touched={touched.description}>
                            <Field
                                as='textarea'
                                name='description'
                                placeholder='plan description'
                                rows={6}
                            />
                        </FieldWrapper>
                        {errors.description && touched.description ? (
                            <Error>{errors.description}</Error>
                        ) : <Error></Error>}
                        <SecondaryButton disabled={!(isValid && dirty)} type='submit'>Create</SecondaryButton>
                    </Form>
                )}

            </Formik>
        </FormWrapper>
    )
};

export default PlanForm