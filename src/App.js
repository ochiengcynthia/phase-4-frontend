import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Adoptions from './components/Adoptions';
import Animals from './components/Animals';
import Centers from './components/Centers';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Centers" element={<Centers />} />
        <Route path="/Animals" element={<Animals />} />
        <Route path="/Adoptions" element={<Adoptions />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
