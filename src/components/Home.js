import React from 'react'
import './styles/home.css'

const Home = () => {
  return (
    <div className="home-page__header-container">
        <div className="home-page__logo">
            <h1>The Drew Marketplace</h1>
        </div>
        <div className="home-page__header-options">
            <p>Buy</p>
            <p>Sell</p>
            <p>Trade</p>
            <p>Login</p>
        </div>
    </div>
  )
}

export default Home