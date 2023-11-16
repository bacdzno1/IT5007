import React from "react";

import NavBarItem from "./NavBarItem";
import City from "./City";
import Type from "./Type";
import Hotel from "./Hotel";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  const handlerSearchPage = () => {
    window.location.replace("/search");
  };

  return (
    <div className="home">
      <div className="container">
        <header className="homepage">
          <div className="homepage-navbar">
            <h2 className="homepage-navbar__title">Booking Website</h2>
            <div className="homepage-navbar__user">
              <button className="homepage-navbar__user-register">
                Register
              </button>
              <button className="homepage-navbar__user-login">Login</button>
            </div>
          </div>
          <NavBarItem />

          <div className="homepage-header">
            <h1>A lifetime of discounts? It's Genius.</h1>
            <p>
              Get rewarded for your travels - unclock instant savings of 10% or
              more with a free account
            </p>
            <button>Sign in / Register </button>
            <div className="homepage-header__input">
              <div className="homepage-header__input-destination">
                <i className="fa fa-bed"></i>
                <input type="text" placeholder="Where are you going?"></input>
              </div>

              <div className="homepage-header__input-calendar">
                <i className="fa fa-calendar"></i>
                <input
                  type="text"
                  placeholder="11/01/2023 to 12/31/2023"
                ></input>
              </div>

              <div className="homepage-header__input-book">
                <i className="fa fa-female"></i>
                <input
                  type="text"
                  placeholder="1 adult - 0 children - 1 room"
                ></input>
              </div>
              <button onClick={handlerSearchPage}>Search</button>
            </div>
          </div>
        </header>
      </div>

      <div className="content">
        <City />

        <Type />

        <Hotel />
      </div>

      <div className="form">
        <h1>Save time, save money!</h1>
        <p>Sign up and we'll send the best deals to you</p>
        <div className="form-input">
          <input type="text" placeholder="Your email"></input>
          <button>Subcribe</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
