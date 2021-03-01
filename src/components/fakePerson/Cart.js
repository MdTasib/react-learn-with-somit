import React from 'react';
import './person.css';
import Player from './Player';

const Cart = (props) => {
    const players = props.cart;
    console.log(players)

    let name = [];
    let totalPrice = 0;
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        totalPrice += player.price;
        name.push(player.name, ' / ');
    }

    const tax = Math.round(totalPrice / 50);

    return (
        <div className='cart-descrition'>
            <h2>Your Team Player</h2>
            <h4>Players Name: {name}</h4>
            <p>TAX : ${tax}</p>
            <hr />
            <h3>Total Price : ${totalPrice + tax}</h3>
        </div>
    );
};

export default Cart;