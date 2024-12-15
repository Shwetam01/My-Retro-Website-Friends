import React, { useState } from 'react';
import './Review.css';

const Review = () => {
  const [reviews, setReviews] = useState([
    { name: '🌟 Monica G.', text: 'Could this show BE any better?!' },
    { name: '🌟 Joey T.', text: 'How you doin\'? The best sitcom ever!' },
    { name: '🌟 Rachel G.', text: 'We were on a break! And I’m never on a break with this show.' },
    { name: '🌟 Chandler B.', text: 'Could it BE more iconic? Love the humor.' },
    { name: '🌟 Ross G.', text: 'Pivot! This show is my forever favorite.' },
    { name: '🌟 Phoebe B.', text: 'Smelly Cat might be smelly, but this show smells like success!' },
  ]);

  const [newReview, setNewReview] = useState({ name: '', text: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', text: '' });
    }
  };

  return (
    <div className="review-container">
      <h1 className="retro-title">Friends - Fan Reviews</h1>

      {/* Review Submission Form */}
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleInputChange}
          className="input-field"
          required
        />
        <textarea
          name="text"
          placeholder="Your Review"
          value={newReview.text}
          onChange={handleInputChange}
          className="textarea-field"
          required
        ></textarea>
        <button type="submit" className="submit-button">Post Review</button>
      </form>

      {/* Reviews Display */}
      <div className="review-grid">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`review-box ${index % 2 === 0 ? 'tilt-left' : 'tilt-right'}`}
          >
            <h2 className="reviewer-name">{review.name}</h2>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
