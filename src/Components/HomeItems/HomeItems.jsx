import React, { useState, useEffect } from 'react';
import './HomeItems.css';
import CategoryCircle from '../CategoryCircle/CategoryCircle';
import ShoeCard from "../ShoeCard/ShoeCard";

// Import your data files
import SneakersData from "../../assets/data-product/SneakersData";
import CasualData from "../../assets/data-product/CasualData";
import SportsData from "../../assets/data-product/SportsData";
import FormalData from "../../assets/data-product/FormalData";

// Import category images
import s1 from "../../assets/images/sneakers/s1.jpg";
import c1 from "../../assets/images/Casual/ca-1.jpg";
import sp1 from "../../assets/images/sports/sp-1.jpg";
import fo1 from "../../assets/images/formal/fo-6.jpg";

const HomeItems = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentData, setCurrentData] = useState([
    ...SneakersData.slice(0, 5),
    ...CasualData.slice(0, 5),
    ...SportsData.slice(0, 5),
    ...FormalData.slice(0, 5)
  ]);
  const [isLoaded, setIsLoaded] = useState(false);

  const categories = [
    { name: 'Sneakers', image: s1, data: SneakersData },
    { name: 'Casual', image: c1, data: CasualData },
    { name: 'Sports', image: sp1, data: SportsData },
    { name: 'Formal', image: fo1, data: FormalData }
  ];

  // Trigger animation on component mount
  useEffect(() => {
    const element = document.querySelector('.product');
    if (element) {
      element.offsetHeight;
    }

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleCategoryClick = (categoryName, categoryData) => {
    setSelectedCategory(categoryName.toLowerCase());
    setCurrentData(categoryData);
  };

  console.log('Animation state:', isLoaded);

  return (
    <div className={`product ${isLoaded ? 'animate-in' : 'animate-out'}`}>
      {/* Category Circles */}
      <div className="categories-section">
        <h2>Shop by Category</h2>
        <div className="category-circles">
          {categories.map((category, index) => (
            <CategoryCircle
              key={index}
              image={category.image}
              name={category.name}
              onClick={() => handleCategoryClick(category.name, category.data)}
            />
          ))}
        </div>
      </div>

      {/* Shoes Section */}
      <div className="shoes-section">
        <h1>
          {selectedCategory === 'all' ? 'All Shoes' :
            selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) + ' Shoes'}
        </h1>
        <div className="home-items">
          {currentData.map((item, i) => (
            <ShoeCard
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeItems;