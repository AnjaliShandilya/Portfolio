import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Section from './components/othersection.jsx';
import Project from "./components/project.jsx";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Achievements from "./components/acheive.jsx";
import Connect from "./components/connect.jsx";
import Footer from "./components/foter.jsx";


function App() {
  return (
    <div className="bg-black lg:pt-10">
   <Router> 
    <div className="md:hidden flex">
      
    </div>
     <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/acheive" element={<Achievements />} />
        <Route path="/connect" element={<Connect />} />
      </Routes> 
    </Router>
    </div>
  );
}

export default App;
