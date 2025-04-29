import React from "react";
import "./Home.css";

function Home({ navigateTo }) {
  const handleOrderClick = () => {
    navigateTo('order');
  };

  return (
    <div className="home-container">
      <main>
        <div className="elements">
          <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" className="logo" />
          <h1 className="hero-title">KOD ACIKTIRIR<br />PIZZA, DOYURUR</h1>
          <button onClick={handleOrderClick} className="order-button">
            ACIKTIM
          </button>
        </div>
      </main>  
    </div>
  );
}

export default Home;