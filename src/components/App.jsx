import React, { Component } from 'react';
import Timer from './Timer/Index';
import Styleing from './UseCssStyle';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                {/* <Timer /> */}

                {/* <h4>Count : {this.state.count}</h4>
                <button onClick={() => {

                    this.setState(prev => {
                        return {
                            count: prev.count + 1
                        };
                    }, () => {
                        console.log('count : ', this.state.count);
                    })
                }}> Add 1+ </button> */}

                {/* <Styleing /> */}

            </div>
        )
    }
}
export default App;