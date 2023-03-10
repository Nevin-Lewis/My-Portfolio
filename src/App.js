import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Home from './pages/Main';

function App() {
  return (
    <Router>
          <Routes>
            <Route 
              path="/" 
              element={<Welcome />} 
            />
            <Route 
              path="/home"
              element={<Home />} 
            />
          </Routes>
    </Router>
  );
}

export default App;
