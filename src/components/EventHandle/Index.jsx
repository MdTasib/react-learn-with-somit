import React, { Component } from 'react';
import classes from './style.module.css';

class EventHandle extends Component {

    state = {
        name: ''
    }

    btnHandle = event => {
        // console.log('Clink Button');
        console.log(event.target);
    }

    inputHandle = event => {
        // console.log(event.target.value)
        this.setState({ name: event.target.value })
    }

    handleFocus = event => {
        console.log('I am focus event');
    }

    handleBlur = event => {
        if (!this.state.name) {
            alert('Please type inter your name this input');
        }
        console.log('I am blur event');
    }

    render() {
        return (
            <div className={classes.container}>
                <h2 className={classes.event}>Event in React</h2>
                <button className={classes.btn} onClick={this.btnHandle}>Click Me</button><br />
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.name}
                    onChange={this.inputHandle}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
                <br />
                <br />
                {this.state.name && <h3>Welcome, {this.state.name}</h3>}
            </div>
        );
    }
}

export default EventHandle;