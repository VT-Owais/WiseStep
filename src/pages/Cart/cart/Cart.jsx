import React, { useContext } from 'react';
import { CartContext } from '../../../Components/Context/CartContext';
import './Cart.css'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <table className='table'>
          <thead className='table-header'>
            <tr>
              <th>Sl. No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {cartItems.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td><img src={item.image} width="50" /></td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className='qnt-btn'>-</button>
                  {item.quantity}
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className='qnt-btn'>+</button>
                </td>
                <td>₹{item.price * item.quantity}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)} className='cart-btn'>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
