import React, { Component } from 'react';

class ControlForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        event.target.reset();
        this.setState({ name: '', password: '', email: '' })
    }

    render() {
        const { name, email, password } = this.state;
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={name} onChange={this.handleChange} name="name" placeholder='Enter Your Name' className="form-control m-2" />
                    <input type="email" value={email} onChange={this.handleChange} name="email" placeholder='Your@gmail.com' className="form-control m-2" />
                    <input type="password" value={password} onChange={this.handleChange} name="password" placeholder='*********' className="form-control m-2" />
                    <button type="submit" className='btn btn-info m-2'>Submit</button>
                </form>
            </div>
        );
    }
}

export default ControlForm;