import React from 'react';
import './product.css';

const Product = (props) => {
    const { name, img, price, seller, stock } = props.product;
    return (
        <div className='product-container'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-description">
                <h4>{name}</h4>
                <p>by: {seller}</p>
                <p>Price : {price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleBtn(props.product)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;