import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Homepage from "./pages/Homepage";
import Navbar from './pages/Navbar';
import About from './pages/About';
import Experience from "./pages/Experience";
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Extracurricular from './pages/Extracurricular';
import Contact from './pages/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/workshops" element={<Extracurricular/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
);


