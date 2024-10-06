// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Header";
// import Home from "./Home";
// import About from "./About";
// import Services from "./Services";
// import Blogs from "./Blogs";
// import Features from "./Features";
// import "./App.css";
// import FeatureDetail from "./FeaturesDetails";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <div className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/features" element={<Features />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/blogs" element={<Blogs />} />
//           </Routes>
//       <Routes>
//         <Route path="/features" element={Features} />
//         <Route path="/features/:featureId" element={FeatureDetail} />
//       </Routes>
          
//         </div>
//       </div>

//     </Router>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Blogs from "./Blogs";
import Features from "./Features";
import FeatureDetail from "./FeaturesDetails"; // Ensure the import is correct
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/features" element={<Features />} /> 
            <Route path="/features/:featureId" element={<FeatureDetail />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

