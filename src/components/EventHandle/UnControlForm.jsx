import React, { Component } from 'react';

class UnControlForm extends Component {
    handleSubmit = event => {
        event.preventDefault();

        const data = {};
        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.password.value;
        console.log(data)
        event.target.reset();
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder='Enter Your Name' className="form-control m-2" />
                    <input type="email" name="email" placeholder='Your@gmail.com' className="form-control m-2" />
                    <input type="password" name="password" placeholder='*********' className="form-control m-2" />
                    <button type="submit" className='btn btn-info m-2'>Submit</button>
                </form>
            </div>
        );
    }
}

export default UnControlForm;