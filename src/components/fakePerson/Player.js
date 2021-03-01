import React from 'react';

const Player = (props) => {
    const { img, name, country, club, price } = props.player;
    return (
        <div className='singlePlayer'>
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <h5>Country : {country}</h5>
            <h5>Club : {club}</h5>
            <span>Price : {price}</span><br />
            <button onClick={() => props.addToCart(props.player)}>Add To Cart</button>
        </div>
    );
};

export default Player;