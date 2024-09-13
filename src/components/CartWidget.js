

import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';  // Importamos el ícono de carrito

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <span className="badge bg-secondary">3</span> {/* Número hardcodeado */}
    </div>
  );
}

export default CartWidget;
