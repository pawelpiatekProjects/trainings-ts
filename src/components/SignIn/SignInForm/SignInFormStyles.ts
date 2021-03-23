import styled from "styled-components";
import * as variables from '../../../assets/styles/variables';
import {textextraSmall} from "../../../assets/styles/variables";
import {Link} from 'react-router-dom';
import { ErrorOutline} from '@material-ui/icons';

interface IError {
    isError: any;
    touched: any;
}

interface ISocialButton {
    color: string
}

export const FormWrapper = styled.div`
  width: 50%;
`;

export const FormHeader = styled.h1`
  font-weight: 500;
`;

export const FormParagraph = styled.p`
  font-size: ${variables.textSmall};
  color: ${variables.textColorTertiary};
  
  a{
    text-decoration: none;
    font-weight: 500;
    color: ${variables.yellowPrimary};
    margin-left: .5rem;
  }
`;

export const SocialMediaSignUp = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

export const SocialMediaButton = styled.button<ISocialButton>`
 background: ${variables.light};
 padding: 1rem 1.5rem;
 border: 2px solid ${variables.thirdGray};
 border-radius: 1rem;
 width: 20rem;
 display: flex;
 justify-content: start;
 align-items: center;
 transition: all .3s;
 
 &:hover {
  border-color: ${props => props.color};
 }
 
 svg {
 margin-right: .3rem;
 }
 
 span {
  font-size: ${variables.textextraSmall};
 }
 
`;

export const Divider = styled.p`
  text-align: center;
  position: relative;
  width: 100%;
  color: ${variables.thirdGray};
  
  &:before {
    position: absolute;
    content: '';
    width: 40%;
    height: 1px;
    background: ${variables.thirdGray};
    top: 50%;
    left: 0;
  }
  
  &:after {
    position: absolute;
    content: '';
    width: 40%;
    height: 1px;
    background: ${variables.thirdGray};
    top: 50%;
    right: 0;
  }
`;

export const FieldLabel = styled.label`
  display: block;
  font-size: ${variables.textSmall};
  margin-bottom: .5rem;
  color: ${variables.textColorTertiary};
  font-weight: 500;
`;

export const FieldWrapper = styled.div<IError>`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid;
  border-color: ${props => props.isError && props.touched ? variables.errorRed : variables.thirdGray};
  background: ${props => props.isError && props.touched ? variables.errorRedRgba : variables.light};
  position: relative;
  
  border-radius: 1rem;
  display: flex;
  justify-content: start;
  align-items: center;
  
  input {
    border: none;
    font-size: ${variables.textSmall};
    background: transparent;
    color: ${variables.textColorTertiary};
    
    &:focus {
    outline: none;
    }
    
    
  }
  
  svg {
    margin-right: .5rem;
    color: ${variables.thirdGray};
      color: ${variables.textColorTertiary}
  }
`;

export const Error = styled.p`
  font-size: ${variables.textextraSmall};
  margin: .2rem 0 1.5rem 0;
  height: 1.6rem;
  color: ${variables.errorRed};
  
`;

export const ErrorIcon = styled(ErrorOutline)<IError>`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
   right: -5rem;
   font-size: 2.5rem;
   opacity: ${props => props.isError && props.touched ? 1 : 0};
   color: ${props => props.isError && props.touched ?
    variables.errorRed : variables.textColorTertiary} !important;
`;

export const ForgotPassword = styled(Link)`
  font-size: ${textextraSmall};
  color: ${variables.textColorTertiary};
  font-weight: 500;
  margin-top: 2.5rem;
  margin-bottom: 3rem;
  display: block;
  text-decoration: none;
  
`;
