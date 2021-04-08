import styled from "styled-components";
import * as variables from '../../../../assets/styles/variables';

interface ISelect {
    isOpen: boolean;
}

export const FormWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  
`;

export const CustomImagePickerWrapper = styled.div`
  width: 100%;
  position: relative;
  
  input {
    display: none;
  }
  
  margin-bottom: 3rem;
`;

export const CustomImagePicker = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid ${variables.thirdGray};
  border-radius: 1rem;
  transition: all .3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10!important;
  position: static;
  &:hover {
    border-color: ${variables.yellowPrimary};
  }
  
`;

export const SelectedImage = styled.p`
  margin: 0;
  font-size: ${variables.textMedium};
  color: ${variables.textColorTertiary};
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  
  svg {
    font-size: 2.5rem;
    color: ${variables.yellowPrimary};
  }
  
  
  &:focus {
    outline: none;
  }
`;

export const ImageSelect = styled.ul<ISelect>`
  display: ${props => props.isOpen ? 'grid' : 'none'};
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  z-index: 9!important;
  position: absolute;
  width: 100%;
  background: ${variables.graySecondary};
  padding: 2rem 1rem 1rem 1rem;
  border-bottom: 2px solid ${variables.yellowPrimary};
  border-right: 2px solid ${variables.yellowPrimary};
  border-left: 2px solid ${variables.yellowPrimary};
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  list-style: none;
  margin-top: -1rem;
  box-shadow: 1px 6px 10px -5px rgba(0,0,0,0.75);
`;

export const ImageOption = styled.li`
  img {
    width: 10rem;
    transition: all .3s;
    
    &:hover {
      transform: scale(1.03);
      box-shadow: ${variables.dashboardItemBoxShadow};
      cursor: pointer;
    }
  }
`;