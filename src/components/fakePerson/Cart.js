import React from 'react';
import './person.css';

const Cart = (props) => {
    const players = props.cart;


    return (
        <div className='cart-descrition'>
            <h2>Your Team Player</h2>
            <h4>Players Name: {price}</h4>
            <p>TAX : </p>
            <hr />
            <h3>Total Price : </h3>
        </div>
    );
};

export default Cart;