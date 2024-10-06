import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 
import Features from "./Features";
import About from './About';

const Home = () => {
  return (
    <div className="home-container">
      {/* main Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MyWebsite</h1>
          <p>Your go-to solution for amazing services and insightful blogs.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <Features />
      

    {/* About us */}
    <h1 className="about-heading">
          <Link to="/about">About Us</Link>
        </h1>
    <About />

  {/* Leftside */}
      {/* <Leftside /> */}

    </div>
  );
};

export default Home;