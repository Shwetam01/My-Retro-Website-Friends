import React from 'react';
import './Gallery.css';
import behind1 from './assets/behind1.avif';
import behind2 from './assets/behind2.jpeg';
import behind3 from './assets/behind3.jpeg';
import behind4 from './assets/behind4.webp';
import behind5 from './assets/behind5.jpeg';
import behind6 from './assets/behind6.webp';
import middle1 from './assets/middle1.avif';
import middle2 from './assets/middle2.jpeg';
import middle3 from './assets/middle3.jpeg';
import middle4 from './assets/middle4.jpeg';
import middle5 from './assets/middle5.webp';
import middle6 from './assets/middle6.webp';
import middle7 from './assets/middle7.webp';
import middle8 from './assets/middle8.jpeg';
import middle9 from './assets/middle9.jpeg';
const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="retro-title">Friends - Behind the Scene Gallery</h1>
      <div className="gallery-grid">
        <img src={behind1} alt="Behind the Scene 1" className="gallery-image" />
        <img src={behind2} alt="Behind the Scene 2" className="gallery-image" />
        <img src={behind3} alt="Behind the Scene 3" className="gallery-image" />
        <div className="gallery-container">
      <h1 className="retro-title">Water-Fountain</h1>
      <div className="gallery-grid">
      <img src={middle1} alt="Behind 1" className="gallery-image" />
      <img src={middle2} alt="Behind 1" className="gallery-image" />
      <img src={middle3} alt="Behind 1" className="gallery-image" />
      </div>
    </div>
    <div className="gallery-container">
      <h1 className="retro-title">Central Perk</h1>
      <div className="gallery-grid">
        <img src={middle4} alt="Behind the Scene 1" className="gallery-image" />
        <img src={middle5} alt="Behind the Scene 1" className="gallery-image" />
        <img src={middle6}alt="Behind the Scene 1" className="gallery-image" />
      </div>
    </div>
    <div className="gallery-container">
      <h1 className="retro-title">Kitchen</h1>
      <div className="gallery-grid">
        <img src={middle7} alt="Behind the Scene 1" className="gallery-image" />
        <img src={middle8} alt="Behind the Scene 1" className="gallery-image" />
        <img src={middle9}alt="Behind the Scene 1" className="gallery-image" />
      
      </div>
    </div>
      </div>
      <div className="gallery-container">
      <h1 className="retro-title">All Together</h1>
      <div className="gallery-grid">
        <img src={behind4} alt="Behind the Scene 4" className="gallery-image" />
        <img src={behind5} alt="Behind the Scene 5" className="gallery-image" />
        <img src={behind6} alt="Behind the Scene 6" className="gallery-image" />
      </div>
    </div>
    </div>
    
  );
};

export default Gallery;
