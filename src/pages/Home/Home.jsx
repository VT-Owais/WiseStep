import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import HomeItems from "../../Components/HomeItems/HomeItems";
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger hero animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="back-img">
        <img
          className="background-image"
          src="./src/assets/images/main-side/main-bg.png"
          alt="Background"
        />
        <div className="content">
          <div className={`text-content ${isLoaded ? 'animate-text' : ''}`}>
            <h1>
              <span className="logo-link">
                Take Wise<br />Steps!
              </span>
            </h1>
          </div>
          <div className={`shoe-image ${isLoaded ? 'animate-image' : ''}`}>
            <img src="./src/assets/images/main-side/main-shoe.png" alt="Shoe" />
          </div>
        </div>
      </div>
      <HomeItems />
      <Footer/>
    </>
  );
};

export default Home;