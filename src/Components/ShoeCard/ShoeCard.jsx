import React, { useState, useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import './ShoeCard.css';
import { CartContext } from '../../Components/Context/CartContext'; 

const ShoeCard = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useContext(CartContext); 

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: props.id,
      name: props.name,
      image: props.image,
      price: props.price,
      quantity: quantity,
    });
  };

  return (
    <div className='item'>
      <FaHeart 
        className={`wishlist-icon ${isWishlisted ? 'active' : ''}`}
        onClick={() => setIsWishlisted(!isWishlisted)}
      />
      
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="item-price">₹{props.price}</div>
      
      <div className="quantity-controls">
        <button className="quantity-btn" onClick={handleDecrement}>-</button>
        <span className="quantity">{quantity}</span>
        <button className="quantity-btn" onClick={handleIncrement}>+</button>
      </div>
      
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ShoeCard;
