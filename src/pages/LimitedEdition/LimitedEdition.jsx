import React from 'react'
import './LimitedEdition.css'
import ShoeCard from "../../Components/ShoeCard/ShoeCard";
import LimitedEditionData from './LimitedEditionData'
import Footer from '../../Components/Footer/Footer'


const LimitedEdition = () => {
  return (
   
       <div className="Limited-shoes">
      <h1> Limited-Shoes</h1>
      <div className="Limited-items">
      { LimitedEditionData.map((item,i) => (
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

export default LimitedEdition
