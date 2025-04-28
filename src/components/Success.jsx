import React from "react";
import "./Success.css";

function Success({ orderData }) {
  return (
    <div className="success-container">
      <div className="elementLogo">
          <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" className="logo" />
      </div>
      <div className="elementMessage">
          <h1 className="hero-title">TEBKRİLER!<br />SİPARİŞİNİZ ALINDI</h1>          
      </div>
    </div>
);
  } 


export default Success;
