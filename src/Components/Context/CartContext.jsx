// src/Context/CartContext.jsx
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  

  const addToCart = (item) => {
    const exists = cartItems.find(i => i.id === item.id);
    if (exists) {
      setCartItems(prev => 
        prev.map(i => i.id === item.id 
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
        )
      );
    } else {
      setCartItems(prev => [...prev, item]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;