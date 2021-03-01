import React, { useState, useEffect } from 'react';
import personData from './person.json';
import './person.css';
import SinglePerson from './SinglePerson';

const Person = () => {
    const allData = personData;


    return (
        <div className='person-container'>
            <div className='single-person'>
                {
                    allData.map(data => <SinglePerson data={data}></SinglePerson>)
                }
            </div>
        </div>
    );
};

export default Person;