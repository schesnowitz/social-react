

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/Header.js"
import HomeGuest from './components/HomeGuest.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Terms from './components/Terms.js';
function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={< HomeGuest/>} />
        <Route path='/about' element={< About/>} />
        <Route path='/terms' element={< Terms/>} />
        </Routes>  
      <Footer />

  
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <Main />
);

