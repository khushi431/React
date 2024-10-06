import React from "react";
import { Link } from "react-router-dom";
import "./Features.css"; // Import the CSS file

const Features = () => {
  return (
    <div className="features-container">
      {/* Features Section */}
      <section className="features">
        <h2 className="features-title">
          <Link to="/features">Our Features</Link>
        </h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>
            <Link to="/features/feature1">Feature 1</Link> </h3>
            <p>We provide excellent services that make your life easier.</p>
            <ul>
              <li>24/7 Customer Support</li>
              <li>Affordable Pricing</li>
              <li>Customizable Solutions</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>
            <Link to="/features/feature2">Feature 2</Link></h3>
            <p>Explore our amazing blogs to get the latest insights and trends.</p>
            <ul>
              <li>Industry Expert Contributions</li>
              <li>Weekly Updates</li>
              <li>In-depth Articles and Tutorials</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>
            <Link to="/features/feature3">Feature 3</Link></h3>
            <p>Join our community and connect with like-minded individuals.</p>
            <ul>
              <li>Networking Opportunities</li>
              <li>Online Forums</li>
              <li>Exclusive Webinars and Events</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>
            <Link to="/features/feature4">Feature 4</Link></h3>
            <p>Get access to our comprehensive analytics tools.</p>
            <ul>
              <li>Real-time Data Tracking</li>
              <li>User-Friendly Dashboard</li>
              <li>Custom Reports</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>
              <Link to="/features/feature5">Feature 5</Link></h3>
            <p>Experience top-notch security for your data.</p>
            <ul>
              <li>End-to-End Encryption</li>
              <li>Regular Security Audits</li>
              <li>Data Backup Solutions</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>
            <Link to="/features/feature6">Feature 6</Link></h3>
            <p>Leverage our expertise in digital marketing.</p>
            <ul>
              <li>SEO Optimization</li>
              <li>Social Media Management</li>
              <li>Content Marketing Strategies</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>
            <Link to="/features/feature7">Feature 7</Link></h3>
            <p>More about our expertise in digital marketing.</p>
            <ul>
              <li>SEO Optimization</li>
              <li>Social Media Management</li>
              <li>Content Marketing Strategies</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>
            <Link to="/features/feature8">Feature 8</Link></h3>
            <p>Explore our amazing blogs to get the latest insights and trends.</p>
            <ul>
              <li>Industry Expert Contributions</li>
              <li>Weekly Updates</li>
              <li>In-depth Articles and Tutorials</li>
            </ul>
          </div> 
          <div className="feature-card">
            <h3>
            <Link to="/features/feature9">Feature 9</Link></h3>
            <p>Explore our amazing blogs to get the latest insights and trends.</p>
            <ul>
              <li>Industry Expert Contributions</li>
              <li>Weekly Updates</li>
              <li>In-depth Articles and Tutorials</li>
            </ul>
          </div>  
        </div>
      </section>
    </div>
  );
};

export default Features;


// // src/components/Features.js
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Features.css"; // Import the CSS file

// const Features = () => {
//   return (
//     <div className="features-container">
//       {/* Features Section */}
//       <section className="features">
//         <h2 className="features-title">
//           <Link to="/features">Our Features</Link>
//         </h2>
//         <div className="feature-cards">
//           {/* Updated Feature Cards with links to details */}
//           <div className="feature-card">
//             <h3>
//               <Link to="/features/feature1">Feature 1</Link>
//             </h3>
//             <p>We provide excellent services that make your life easier.</p>
//           </div>
//           <div className="feature-card">
//             <h3>
//               <Link to="/features/feature2">Feature 2</Link>
//             </h3>
//             <p>Explore our amazing blogs to get the latest insights and trends.</p>
//           </div>
//           <div className="feature-card">
//             <h3>
//               <Link to="/features/feature3">Feature 3</Link>
//             </h3>
//             <p>Join our community and connect with like-minded individuals.</p>
//           </div>
//           <div className="feature-card">
//           <h3>
//             <Link to="/features/feature4">Feature 4</Link></h3>
//             <p>Get access to our comprehensive analytics tools.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Features;


