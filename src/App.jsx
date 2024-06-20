
import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cars from "./Pages/Cars";
import Services from "./Pages/Services";

const App = () => {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/services" element={<Services />} />
        </Routes>
    
    </>
  );
};

export default App;