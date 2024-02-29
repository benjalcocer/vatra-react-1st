import React from 'react';
import './CartWidget.css'

function CartWidget ({ number }) {
    return (
        <div className= "CartCont">
            <a href="#"><i className="bi bi-cart" id="carro"></i></a>
            <span className="numCarro">{number}</span>
        </div>
    );
}

export default CartWidget;