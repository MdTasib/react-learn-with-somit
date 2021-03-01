import React, { useState, useEffect } from 'react';
import fakeData from './person.json';
import Player from './Player';
import './person.css'
import Cart from './Cart';

const allData = fakeData;
const Person = () => {
    const [players, setPlayers] = useState(allData);

    useEffect(() => {
        fetch(allData)
            .then(response => response.json())
            .then(data => setPlayers(data))
    }, []);

    const [cart, setCart] = useState([]);
    const addToCart = (event) => {
        const newCart = [...cart, event];
        setCart(newCart);
    }

    return (
        <div className='player-container'>
            <div className="player">
                {
                    players.map((player) => <Player addToCart={addToCart} player={player} key={player.id}></Player>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Person;