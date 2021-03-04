import React from 'react';
import classes from '../UseCssStyle/style.module.css';



const BoxA = () => {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dignissimos.</p>
            <button className={classes.btn}>BoxA</button>
        </div>
    );
};

export default BoxA;