import React, { Component } from 'react';
import classes from './style.module.css';

class Inputs extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.title}>
                    <p>Working with Forms in React</p>
                    <hr />
                </div>
                <h3 className='bg-danger'>Inputs</h3>
            </div>
        );
    }
}

export default Inputs;