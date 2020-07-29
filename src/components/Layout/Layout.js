import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Auxi from '../../hoc/Auxi';
import classes from '../Layout/Layout.module.css'
const layout = (props) => (
    <Auxi>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxi>

);

export default layout;