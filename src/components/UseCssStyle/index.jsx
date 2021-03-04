import React from 'react';
import BoxA from './BoxA';
import BoxB from './BoxB';
import classes from '../UseCssStyle/style.module.css';

const Styleing = () => {

    const headerStyle = {
        color: 'red',
        fontSize: '30px',
        fontFamily: 'sanSarif'
    }

    return (
        <div>
            <h1 style={headerStyle}>How to use react Styleing</h1>
            <h1 style={{
                color: 'blue',
                background: 'red',
                padding: '10px',
            }}>Another Syleing</h1>
            <button className={classes.btn}>Click Me</button>
            <BoxA />
            <BoxB />
        </div>
    );
};

export default Styleing;