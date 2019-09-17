import React from 'react';
import logo from '../../../assests/image/icon.svg';
import './logo.scss';


const Logo = () => {
    return (
        <div>
            <img className="Logo" src={logo} alt="logo" />
        </div>
    );
};

export default Logo;