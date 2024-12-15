import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Characters from './Characters';
import Downloads from './Downloads';
import Games from './Games';
import Crew from './Crew';
import Gallery from './Gallery';
import Review from './Review';

const App = () => {
  return (
    <Router basename="/My-Retro-Website-Friends">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/games" element={<Games />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
};

export default App;
