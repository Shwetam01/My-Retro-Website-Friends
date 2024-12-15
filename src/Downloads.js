import React from 'react';
import './Downloads.css';
import screensaver1 from './assets/screensaver1.jpeg';
import screensaver2 from './assets/screensaver2.jpeg';
import poster1 from './assets/poster1.jpeg';
import poster2 from './assets/poster2.jpeg';
import poster3 from './assets/poster3.jpeg';
import wallpaper1 from './assets/wallpaper1.webp';
import wallpaper2 from './assets/wallpaper2.jpeg';
import wallpaper3 from './assets/wallpaper3.jpeg';
import wallpaper4 from './assets/wallpaper4.jpeg';
import gif1 from './assets/gif1.gif';
import gif2 from './assets/gif2.gif';
import gif3 from './assets/gif3.gif';
const Downloads = () => {
  return (
    <div className="downloads-container">
      <h1 className="retro-title">Welcome to the Friends Downloads Page</h1>

      <section className="downloads-section">
        <h2>Screensavers</h2>
        <div className="downloads-grid">
          <img src={screensaver1} alt="Screensaver 1" className="retro-image" />
          <img src={screensaver2} alt="Screensaver 2" className="retro-image" />
        </div>
      </section>

      <section className="downloads-section">
        <h2>Posters</h2>
        <div className="downloads-grid">
          <img src= {poster1} alt="Poster 1" className="retro-image" />
          <img src= {poster2} alt="Poster 2" className="retro-image" />
          <img src= {poster3} alt="Poster 3" className="retro-image" />
        </div>
      </section>

      <section className="downloads-section">
        <h2>Wallpapers</h2>
        <div className="downloads-grid">
          <img src= {wallpaper1} alt="Wallpaper 1" className="retro-image" />
          <img src= {wallpaper2} alt="Wallpaper 2" className="retro-image" />
          <img src= {wallpaper3} alt="Wallpaper 3" className="retro-image" />
          <img src= {wallpaper4} alt="Wallpaper 4" className="retro-image" />
        </div>
      </section>

      <section className="downloads-section">
        <h2>GIFs</h2>
        <div className="downloads-grid">
          <img src= {gif1} alt="GIF 1" className="retro-image" />
          <img src={gif2} alt="GIF 2" className="retro-image" />
          <img src= {gif3} alt="GIF 3" className="retro-image" />
        </div>
      </section>
    </div>
  );
};

export default Downloads;
