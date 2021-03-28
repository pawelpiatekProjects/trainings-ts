import React from 'react';
import {PopUpWrapper, PopUpContent, Backdrop} from './PopUpStyles';

const PopUp: React.FC = () => {
    return (
        <PopUpWrapper isOpen={true}>
            <PopUpContent>

            </PopUpContent>
            <Backdrop/>
        </PopUpWrapper>
    )
};

export default PopUp;
