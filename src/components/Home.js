import React from "react";
import "./styles/home.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import computerImg from "../assets/pw5jy11vn8u0jbi3rdu3aq1ij4bl15411237.png";
import iphoneImg from "../assets/apple-iphone-x-pictures-5.png";
import appleWatch from "../assets/apple_watch.png";
import macPro from "../assets/macbook_pro.png";
import { useQuery } from "react-query";
import axios from "axios";

const Home = () => {

  const {isLoading, error, data} = useQuery("features", () =>  axios("http://10.30.20.162:5000/api/get-featured"))


  if (error) return <h1>Error !</h1>
  if (isLoading) return <h1>Loading...</h1>
  console.log(data.data[0].name)



  return (
    <div className="home-page__body">
      <div className="home-page__header-container">
        <div className="home-page__header-logo">
          <h1>The Drew Marketplace</h1>
        </div>
        <div className="home-page__header-options">
          <p className="home-page__header-options-buy-indicator">Buy</p>
          <p>Sell</p>
          <p>Trade</p>
          <BsPersonCircle
            size={30}
            className="home-page_header-options-avatar"
          />
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
              <span>Accessories</span>
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
          <div className="home-page__body-featured-features">
            <ul className="home-page__body-categories-choices">
              <li>
                <img
                  src={computerImg}
                  className="home-page__body-featured-features-img"
                />
                <div className="home-page__body-featured-features-description">
                  <h4>{data.data[0].name}</h4>
                  <span>{data.data[0].description}</span>
                </div>
                <h5>{data.data[0].price} $</h5>
              </li>
              <li>
                <img
                  src={iphoneImg}
                  className="home-page__body-featured-features-img"
                />
                <div className="home-page__body-featured-features-description">
                <h4>{data.data[1].name}</h4>
                  <span>{data.data[1].description}</span>
                </div>
                <h5>{data.data[1].price} $</h5>
              </li>
              <li>
                <img
                  src={appleWatch}
                  className="home-page__body-featured-features-img"
                />
                <div className="home-page__body-featured-features-description">
                <h4>{data.data[2].name}</h4>
                  <span>{data.data[2].description}</span>
                </div>
                <h5>{data.data[2].price} $</h5>
              </li>
              <li>
                <img
                  src={macPro}
                  className="home-page__body-featured-features-img"
                />
                <div className="home-page__body-featured-features-description">
                <h4>{data.data[3].name}</h4>
                  <span>{data.data[3].description}</span>
                </div>
                <h5>{data.data[3].price} $</h5>
              </li>
              <li>
                <img
                  src={computerImg}
                  className="home-page__body-featured-features-img"
                />
                <div className="home-page__body-featured-features-description">
                <h4>{data.data[4].name}</h4>
                  <span>{data.data[4].description}</span>
                </div>
                <h5>{data.data[4].price} $</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="home-page__footer-container">
        <div className="home-page__footer-rigths">
          <h1>Copyright © 2022 The Drew Marketplace | All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
