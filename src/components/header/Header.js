import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <div className="header-img">
                    <img src={logo} alt="" />
                </div>
                <div className="header-menu">
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/order">Order Review</a></li>
                        <li><a href="/manage">Manage Inventory here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;