import React, { Component } from 'react';
import classes from './style.module.css';

class Inputs extends Component {
    state = {
        name: '',
        country: '',
        bio: '',
        birthday: '',
        gender: '',
        agree: false
    }

    formHandle = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    checkBoxHandle = event => {
        this.setState({
            agree: event.target.checked
        })
    }

    render() {
        const { name, country, bio, birthday, agree } = this.state;
        return (
            <div className={classes.container}>
                <div className={classes.title}>
                    <p>Working with Forms in React</p>
                    <hr />
                </div>

                <input
                    onChange={this.formHandle}
                    value={name}
                    className='form-control my-2'
                    type="text"
                    name="name"
                    placeholder='Inter your name' />

                <select
                    onChange={this.formHandle}
                    value={country}
                    className='form-control my-2'
                    name='country'>
                    <option>Select Your Country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Indea">Indea</option>
                    <option value="China">China</option>
                    <option value="Pakistan">Pakistan</option>
                </select>

                <textarea
                    onChange={this.formHandle}
                    value={bio}
                    className='form-control my-2'
                    name="bio"
                    placeholder='Please, Tell Me About Yourself' cols="30" rows="10">
                </textarea>

                <input
                    onChange={this.formHandle}
                    value={birthday}
                    className='form-control my-2'
                    type="date"
                    name="birthday" />

                <div className="radio">
                    <input
                        onChange={this.formHandle}
                        type="radio"
                        name="gender"
                        value='Male' />
                        Male
                    <input
                        onChange={this.formHandle}
                        type="radio"
                        name="gender"
                        value='Female' />
                        Female
                    <input
                        onChange={this.formHandle}
                        type="radio"
                        name="gender"
                        value='Other' />
                        Other
                </div>
                <div>
                    <input
                        onChange={this.checkBoxHandle}
                        type="checkbox"
                        name="agree"
                        checked={agree}
                    />
                    I'm agree to all the terms conditions.
                </div>

                <button
                    onClick={() => console.log(this.state)}>Show Detail
                </button>
            </div>
        );
    }
}

export default Inputs;