import React, {useContext} from "react";
import {LoaderWrapper, LoaderContent} from './LoaderStyles';
import * as variables from '../../assets/styles/variables';
import {Backdrop} from '../../assets/styles/customStylesComponents/backdrop';
import Spinner from "../Spinner/Spinner";
import {LoaderContext} from "../../contexts/LoaderContext";

const Loader: React.FC = () => {
    const {isOpen} = useContext(LoaderContext);
    return (
        <LoaderWrapper isOpen={isOpen}>
            <LoaderContent>
                <Spinner background={variables.yellowPrimary}/>
            </LoaderContent>
            <Backdrop isOpen={isOpen}/>
        </LoaderWrapper>
    )
};

export default Loader;