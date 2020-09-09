import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'
const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {props.isAuthenticated
            ? <NavigationItem link="/logout" active>Log out</NavigationItem>
            : <NavigationItem link="/auth" active>Auth</NavigationItem>
        }
    </ul>
);

export default navigationItems;