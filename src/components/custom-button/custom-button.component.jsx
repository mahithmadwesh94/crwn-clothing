import React from 'react';
import './custom-button.styles.scss';

<<<<<<< HEAD
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
=======
const CustomButton = ({ children, ...otherProps }) => (
    <button className="custom-button" {...otherProps}>
>>>>>>> ecf177e332d4ac90a1e2a8062e6540b3aa8080b7
        {children}
    </button>
);

export default CustomButton;