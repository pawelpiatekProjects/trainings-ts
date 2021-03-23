import styled from "styled-components";
import * as variables from '../../../assets/styles/variables';
import {Link} from 'react-router-dom';

export const FormWrapper = styled.div`
  width: 50%;
`;


export const ForgotPassword = styled(Link)`
  font-size: ${variables.textextraSmall};
  color: ${variables.textColorTertiary};
  font-weight: 500;
  margin-top: 2.5rem;
  margin-bottom: 3rem;
  display: block;
  text-decoration: none;
  
`;
