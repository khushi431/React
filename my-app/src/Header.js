import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Header.css';

function Essentials() {
  return <h1>Essentials</h1>;
}

function Proteins() {
  return <h1>Proteins</h1>;
}

function Gainers() {
  return <h1>Gainers </h1>;
}

function PrePostWorkouts() {
  return <h1>Pre/Post-Workouts</h1>;
}

function WeightLoss() {
  return <h1>Weight Loss</h1>;
}

function SnacksAndAccessories() {
    return <h1>Snacks & Accessories</h1>;
  }
 
// Header component
function Header() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="category/essentials">ESSENTIALS</Link></li>
            <li className="nav-item"><Link to="category/proteins">PROTEINS</Link></li>
            <li className="nav-item"><Link to="category/gainers">GAINERS</Link></li>
            <li className="nav-item"><Link to="category/pre-post-workouts">PRE/POST-WORKOUTS</Link></li>
            <li className="nav-item"><Link to="category/weight-loss">WEIGHT LOSS</Link></li>
            <li className="nav-item"><Link to="category/snacks&accessories">SNACKS&ACCESSORIES</Link></li>
          </ul>
        </nav>
      </header>
      
      {/* Routes to handle each page */}
      <Routes>
        <Route path="category/essentials" element={<Essentials />} />
        <Route path="category/proteins" element={<Proteins />} />
        <Route path="category/gainers" element={<Gainers />} />
        <Route path="category/pre-post-workouts" element={<PrePostWorkouts />} />
        <Route path="category/weight-loss" element={<WeightLoss />} />
        <Route path="category/snacks&accessories" element={<SnacksAndAccessories  />} />
       
        </Routes>
    </div>
  );
}

export default Header;

