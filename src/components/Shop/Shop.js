import React, { useState } from 'react';
import './shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';



const Shop = () => {
    const product10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(product10);
    const [cart, setCart] = useState([]);

    const handleBtn = (event) => {
        const newCart = [...cart, event];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="item-container">
                <ul>
                    {
                        products.map(product => <Product key={product.key} handleBtn={handleBtn} product={product}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;