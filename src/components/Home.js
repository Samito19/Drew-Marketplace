import React from "react";
import "./styles/home.css";

const Home = () => {
  const renderHeader = () => {
    return (
      <div className="home-page__header-container">
        <div className="home-page__logo">
          <h1>The Drew Marketplace</h1>
        </div>
        <div className="home-page__header-options">
          <p>Buy</p>
          <p>Sell</p>
          <p>Trade</p>
          <button className="home-page_header-options-button">Log in</button>
        </div>
      </div>
    );
  };

  const renderHomePageBody = () => {
    return (
      <div className="home-page__body-container">
        <div className="home-page__body-categories-container">
            <div className="home-page__body-categories-title">
            <h2 >Categories</h2>
            </div>
          
          <ul className="home-page__body-categories-choices">
              <li>
                  <span>Electronics</span>
              </li>
              <li>
                  <span>Clothing</span>
              </li>
              <li>
                  <span>Gaming</span>
              </li>
              <li>
                  <span>Furniture</span>
              </li>
          </ul>
        </div>
      </div>
    );
  };
  return (
    <>
      {renderHeader()}
      {renderHomePageBody()}
    </>
  );
};

export default Home;
