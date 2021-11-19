import React from 'react';
import logo from "../assets/logo.png"
import "../styles/Banner.css"


const Banner = () => {
    const title = "la maison jungle"
    return (
        <div className="lmj-banner">
            <img src={logo} alt="la maison jungle" className="lmj-logo"></img>
            <h1 className="lmj-title">{title}</h1>
        </div>
    );
};

export default Banner;