import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Landing from './Component/Landing'
import Blog from './Pages/Blog'
import ContactForm from './Pages/ContactForm';


function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-form" element={<ContactForm/>} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;

