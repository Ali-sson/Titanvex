// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
           {/* <Route path="/services" element={<Services />} />
           <Route path="/faq" element={<FAQ />} />
           <Route path="/book" element={<Book />} />
           <Route path="/pricing" element={<Pricing />} />
           <Route path= "/contact" element={<Contact />} /> */}
      </Routes>
        </>
     
   
  );
  
}

export default App