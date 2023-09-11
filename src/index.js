

import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/Header.js"
import HomeGuest from './components/HomeGuest.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Terms from './components/Terms.js';
import Home from './components/Home.js';
function Main() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('halcyonToken')))
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path='/' element={loggedIn ? < Home/> : <HomeGuest />} />
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

