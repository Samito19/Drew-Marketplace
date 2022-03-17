import React from "react";
import "./styles/home.css";
import { AiOutlineSearch } from "react-icons/ai";
import {BsPersonCircle} from "react-icons/bs"
const Home = () => {
  return (
    <div className="home-page__body">
      <div className="home-page__header-container">
        <div className="home-page__header-logo">
          <h1>The Drew Marketplace</h1>
        </div>
        <div className="home-page__header-options">
          <p>Buy</p>
          <p>Sell</p>   
          <p>Trade</p>
          <BsPersonCircle size={30} className="home-page_header-options-avatar"/>
        </div>
      </div>
      <div className="home-page__body-container">
        <div className="home-page__body-categories-container">
          <div className="home-page__body-categories-title">
            <h2>Categories</h2>
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
            <li>
              <span>Accessoriess</span>
            </li>
          </ul>
        </div>
        <div className="home-page__body-searchbar">
          <input placeholder="Search" type="text" />
          <div className="home-page__body-searchbar-icon">
            <AiOutlineSearch
              size={30}
              className="home-page__body-searchbar-icon-logo"
            />
          </div>
        </div>
        <div className="home-page__body-featured-container">
          <div className="home-page__body-featured-title">
            <h2>Featured</h2>
          </div>
          <div className="home-page__body-featured-features"></div>
        </div>
      </div>
      <div className="home-page__footer-container">
        <div className="home-page__footer-rigths">
          <h1>Copyright © 2020 The Drew Marketplace | All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
