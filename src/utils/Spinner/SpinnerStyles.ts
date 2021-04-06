import styled, {keyframes} from "styled-components";

interface ISpinner {
    background: string
}

const skBounce = keyframes`
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
` ;

export const SpinnerWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin: 100px auto;
`;

const Bounce = styled.div<ISpinner>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.background};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: ${skBounce} 2.0s infinite ease-in-out;
  animation: ${skBounce} 2.0s infinite ease-in-out;
`;

export const Bounce1 = styled(Bounce)`
  
`;

export const Bounce2 = styled(Bounce)`
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
`;



