import React from 'react'
import './TrendingShoes.css'
import ShoeCard from "../../Components/ShoeCard/ShoeCard";
import TrendingData from './TrendingData'
import Footer from '../../Components/Footer/Footer'


const TrendingShoes = () => {
  return (
    <div className="trending-shoes">
      <h1> Trending-Shoes</h1>
      <div className="trending-items">
      { TrendingData.map((item,i) => (
        <ShoeCard
          key={i}
          id = {item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
        ) )}
      </div>
      <Footer/>
    </div>
  )
}

export default TrendingShoes
