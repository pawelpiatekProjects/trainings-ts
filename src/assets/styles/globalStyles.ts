import { createGlobalStyle } from 'styled-components';
import * as variables from './variables';

// global style component which contains global styles for this app
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%; //1rem = 10px
    

  }
  
  // custom scroll
    ::-webkit-scrollbar {
      width: 1.5rem;
      box-shadow: 0px 0px 13px -7px rgba(0,0,0,0.75);
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      background: ${variables.thirdGray}; 
      border-radius: 1rem;
    }
     
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${variables.textColorSecondary}; 
      height: 3rem;
      border-radius: 1rem;
      
      &:hover{
      background: ${variables.yellowPrimary}; 
      }
    }
    
  

  *,
  *::before,
  *::after {
        box-sizing: inherit;
  }

  body {
    width: 100%;
    margin: 0;
    //padding: 8rem 6.5rem;
    font-family: 'Montserrat';
    background: ${variables.grayPrimary};

  }
  
  input{
    font-family: 'Montserrat';
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  
  p {
    font-size: 16px;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
