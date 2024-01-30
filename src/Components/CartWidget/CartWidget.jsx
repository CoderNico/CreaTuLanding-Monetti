import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className='carrito'>
        <img
          alt="logo"
          src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
          width="40"
          height="40"
          href="#cesta"
        />
        0
    </div>
  );
};

export default CartWidget;
