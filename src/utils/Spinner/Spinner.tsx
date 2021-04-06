import React from "react";
import {SpinnerWrapper, Bounce1, Bounce2} from './SpinnerStyles';

interface Props {
    background: string;
}

const Spinner: React.FC<Props> = ({background}) => {
    return (
        <SpinnerWrapper>
            <Bounce1 background={background}/>
            <Bounce2 background={background}/>
        </SpinnerWrapper>
    )
};

export default Spinner;
