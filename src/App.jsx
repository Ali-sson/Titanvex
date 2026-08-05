// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Engineering from "./pages/services/Engineering";
import Procurement from './pages/services/Procurement';
import Logistics from './pages/services/Logistics';
import Spare from './pages/services/Spare';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Products from './pages/Products';
import Industries from './pages/Industries';
// import ConcretePage from './components/products/ConcretePage'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true,     // Animate only once
    });
  }, []);

  return (
    <>
    {/* <Navbar />
    <Home /> */}
   


      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
         <Route path="/services/engineering" element={<Engineering />} />
          <Route path="/services/procurement" element={<Procurement />} />
          <Route path="/services/logistics" element={<Logistics />} />
          <Route path="/services/spare" element={<Spare />} />
          <Route path="/products" element={<Products />} /> 
          <Route path="/industries" element={<Industries />}/>


            {/* <Route path="/faq" element={<FAQ />} />
           <Route path="/book" element={<Book />} />
           <Route path="/pricing" element={<Pricing />} />
           <Route path= "/contact" element={<Contact />} /> */}
      </Routes>
        </>
     
   
  );
  
}

export default App