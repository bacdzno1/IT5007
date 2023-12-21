import React from "react";

import Header from "./Header";
import NavBarItem from "./NavBarItem";
import City from "./City";
import Type from "./Type";
import Hotel from "./Hotel";
import Form from "./Form";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Header />
      </div>

      <div className="content">
        <City />

        <Type />

        <Hotel />
      </div>

      <Form />

      <Footer />
    </div>
  );
};

export default Home;
