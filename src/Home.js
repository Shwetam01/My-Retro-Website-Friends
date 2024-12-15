import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import soundIcon from './assets/sound.png'; 
import songFile from './assets/Friends.mp3'; 

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(songFile)); 

  const toggleSound = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

 
  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0; 
    };
  }, [audio]);

  return (
    <div className="home-page">
      <h1 className="welcome-heading">Welcome to the 90's Vibes!</h1>
      <div className="button-container">
        <Link to="/downloads">
          <button>Downloads</button>
        </Link>
        <Link to="/characters">
          <button>Characters</button>
        </Link>
        <Link to="/games">
          <button>Fun & Games</button>
        </Link>
        <Link to="/crew">
          <button>Caste & Crew</button>
        </Link>
        <Link to="/gallery">
          <button>Gallery</button>
        </Link>
        <Link to="/review">
          <button>Reviews</button>
        </Link>
      </div>
      <div className="sound-toggle" onClick={toggleSound}>
        <img
          src={soundIcon}
          alt="Sound Icon"
          className={`sound-icon ${isPlaying ? 'playing' : ''}`}
        />
      </div>
    </div>
  );
};

export default Home;
