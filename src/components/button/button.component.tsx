import { FC, ButtonHTMLAttributes } from 'react';
import { BaseButton, GoogleButton, InvertedButton, ButtonSpinner } from './button.styles';


export enum BUTTON_TYPE_CLASSES {
    base= 'base',
    google = 'google-sign-in',
    inverted= 'inverted',
};

const getButton = (
    buttonType: BUTTON_TYPE_CLASSES = BUTTON_TYPE_CLASSES.base
): React.ComponentType<ButtonHTMLAttributes<HTMLButtonElement>> => {
    return ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
    }[buttonType]);
};


type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> 


const Button : FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            { isLoading ? <ButtonSpinner/> : children }
        </CustomButton>
    );
   
    
};

export default Button;