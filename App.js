import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './Container';
import {   Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
  
    <WhatGPT3 />
    <Features />
    
    <Possibility />
    <Blog />
    <Footer />
  </div>
)
  export default App