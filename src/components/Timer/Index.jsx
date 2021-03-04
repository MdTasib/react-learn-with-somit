import React, { Component } from 'react';
import './style.css';

class Timer extends Component {

    state = {
        count: 0
    };

    intervalId = null;

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }
    }

    startTimer = () => {
        if (this.state.count > 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState({ count: this.state.count - 1 }, () => {
                    if (this.state.count === 0) {
                        alert('Timer Finished');
                        clearInterval(this.intervalId);
                        this.intervalId = null;
                    }
                })
            }, 1000);
        }
    }

    stapTimer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetTimer = () => {
        this.setState({ count: 0 });
        clearInterval(this.intervalId);
        this.intervalId = null;
    }


    render() {
        return (
            <div className='container'>
                <h3>A Simple Timer App</h3>
                <button onClick={this.decrement}> - </button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}> + </button>
                <div className="control">
                    <button onClick={this.startTimer}>Start</button>
                    <button onClick={this.stapTimer}>Stop</button>
                    <button onClick={this.resetTimer}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Timer;