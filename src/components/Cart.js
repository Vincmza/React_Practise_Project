import React from "react";
import "../styles/Cart.css"

const Cart = () => {
    let monstera = 8;
    let lierre = 10;
    let bouquetDeFleurs = 15;
    let total = monstera + lierre + bouquetDeFleurs;
    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monstera}€</li>
                <li>Lierre : {lierre}€</li>
                <li>Bouquet de fleurs : {bouquetDeFleurs}€</li>
            </ul>
            <div>Total : {total}€</div>
        </div>
    );
};

export default Cart;
