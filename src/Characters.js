
import React from 'react';
import './Characters.css';
import ross from './assets/ross.webp';
import rachel from './assets/rachel.jpeg';
import monica from './assets/monica.jpeg';
import chandler from './assets/chandler.jpeg';
import phoebe from './assets/phoebe.webp';
import joey from './assets/joey.jpeg';

const Characters = () => {
  return (
    <div className="characters-container">
      <h1 className="retro-title">Meet the Friends Characters</h1>
      <section className="character-section">
        <img src= {ross} alt="Ross" className="character-image" />
        <div className="character-info">
          <h2>Ross Geller</h2>
          <p>A paleontologist with a knack for sarcasm and awkward situations. Known for his "We were on a break!" moment.</p>
        </div>
      </section>

      <section className="character-section">
        <img src= {rachel} alt="Rachel" className="character-image" />
        <div className="character-info">
          <h2>Rachel Green</h2>
          <p>A fashion enthusiast with a journey from waitress to a high-profile fashion career. Always stylish and confident.</p>
        </div>
      </section>

      <section className="character-section">
        <img src= {monica} alt="Monica" className="character-image" />
        <div className="character-info">
          <h2>Monica Geller</h2>
          <p>The competitive and organized chef who loves hosting and keeping things tidy. Sister to Ross.</p>
        </div>
      </section>

      <section className="character-section">
        <img src={chandler} alt="Chandler" className="character-image" />
        <div className="character-info">
          <h2>Chandler Bing</h2>
          <p>The sarcastic and witty office worker who is the king of one-liners. Best friends with Joey.</p>
        </div>
      </section>

      <section className="character-section">
        <img src={phoebe} alt="Phoebe" className="character-image" />
        <div className="character-info">
          <h2>Phoebe Buffay</h2>
          <p>The quirky and lovable musician with a unique worldview. Known for her hit song "Smelly Cat."</p>
        </div>
      </section>

      <section className="character-section">
        <img src={joey} alt="Joey" className="character-image" />
        <div className="character-info">
          <h2>Joey Tribbiani</h2>
          <p>The aspiring actor with a love for food and a catchphrase: "How you doin'?" Always the life of the party.</p>
        </div>
      </section>
    </div>
  );
};

export default Characters;
