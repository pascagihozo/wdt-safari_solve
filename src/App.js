import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Comparator from './components/Comparator';
import City from './components/City';

import {Route, Routes} from "react-router-dom";
import Graph from './components/Graph';

// import { MapContainer, TileLayer, useMap } from 'react-leaflet';

// import {Box} from '@mui/material';

function App(){
  return (
  <>
  <Navbar/>
  <Routes>
    <Route  path='/' element={<Home />}/>
    <Route  path='/about' element={<About />}/>
    <Route  path='/contact' element={<Contact />}/>
    <Route  path='/comparator' element={<Comparator />}/>
    <Route path='/city' element={<City/>}/>
    <Route path='/graph' element={<Graph/>}/>
  </Routes>
  <Footer/>
  </>
  )
}

export default App;