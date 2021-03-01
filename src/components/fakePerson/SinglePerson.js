import React from 'react';
import './person.css';


const SinglePerson = (props) => {
    const { name, country, id, img } = props.data;
    return (
        <div className='singlePerson'>
            <h2>Name: {name}</h2>
            <h2>id: {country}</h2>
            <h2>Country: {id}</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default SinglePerson;