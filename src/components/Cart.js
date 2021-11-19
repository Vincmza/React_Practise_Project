import React, { useState } from "react";
import "../styles/Cart.css";

const Cart = () => {
    const [cart, updateCart] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    let monstera = 8;

    return isOpen ? (
        <div className="lmj-cart">
            <button className='lmj-cart-toggle-button'onClick={() => setIsOpen(false)}>
                Fermer le panier
            </button>
            <h2>Panier</h2>
            <div>
                <div>Monstera : ${monstera}€</div>
                <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
            </div>
            <h3>Panier : {monstera * cart}€</h3>
            <button onClick={() => updateCart(0)}>Vider le Panier</button>
        </div>
    ) : (
        <div className="lmj-cart-closed">
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
        </div>
    );
};

export default Cart;
