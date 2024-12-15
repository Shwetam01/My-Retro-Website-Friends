import React from 'react';
import './Crew.css';

const Crew = () => {
  return (
    <div className="crew-container">
      <h1 className="retro-title">Friends Cast & Crew</h1>

      <div className="crew-section">
        <h2>🎬 Cast 🎭</h2>
        <ul className="crew-list">
          <li>🎬 Jennifer Aniston 🎭</li>
          <li>🎬 Courteney Cox 🎭</li>
          <li>🎬 Lisa Kudrow 🎭</li>
          <li>🎬 Matt LeBlanc 🎭</li>
          <li>🎬 Matthew Perry 🎭</li>
          <li>🎬 David Schwimmer 🎭</li>
        </ul>
      </div>

      <div className="crew-section">
        <h2>🎥 Crew 🎬</h2>
        <ul className="crew-list">
          <li>🎥 Director: David Crane 🎬</li>
          <li>🎥 Producer: Marta Kauffman 🎬</li>
          <li>🎥 Writer: Kevin S. Bright 🎬</li>
          <li>🎥 Editor: Michael K. Jones 🎬</li>
        </ul>
      </div>
    </div>
  );
};

export default Crew;
