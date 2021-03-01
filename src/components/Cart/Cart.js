import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)

    const totalCount = cart.reduce((total, productItem) => total + productItem.price, 0);
    let shipping = 0;
    if (totalCount > 500) {
        shipping = 13.55;
    } else if (totalCount >= 200) {
        shipping = 4.99;
    } else if (totalCount < 200 && totalCount >= 1) {
        shipping = 2.99;
    }

    const tax = Math.round(totalCount / 50);

    const total = Math.round(totalCount + shipping + tax);
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items: {cart.length}</p>
            <p>Price : {totalCount}</p>
            <p>Shipping & Handling:	${shipping}</p>
            <p>TAX : ${tax}</p>

            <hr />
            <h5 style={{ margin: 0, color: "red" }}>Order Total : ${total}</h5>
        </div>
    );
};

export default Cart;