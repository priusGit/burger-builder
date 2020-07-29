/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import classes from './Logo.module.css'
import burgerLogo from '../../assets/burger-logo.png'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} />
    </div>
);
export default logo;