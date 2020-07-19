import React, { useEffect, useState } from 'react'


import Spinner from './components/Spinner'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Gallery from './pages/Gallery'
import Footer from './pages/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutUs />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
