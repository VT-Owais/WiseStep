import React from 'react';
import './CategoryCircle.css';

const CategoryCircle = ({ image, name, onClick }) => {
  return (
    <div className="category-circle" onClick={onClick}>
      <div className="circle-container">
        <img src={image} alt={name} />
      </div>
      <p className="category-name">{name}</p>
    </div>
  );
};

export default CategoryCircle;