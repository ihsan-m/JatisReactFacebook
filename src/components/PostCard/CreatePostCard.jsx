// src/components/CreatePostCard.js
import React, { useState } from 'react';
import profileImg from '../../assets/profile.png';
import buttonsImg from '../../assets/Buttons.png';
import './CreatePostCard.css';

const CreatePostCard = () => {
  const [postText, setPostText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="create-post-card">
      <img src={profileImg} alt="Profile" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Bagaimana hari kamu?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          className="post-input"
        />
        <div className="actions">
          <img src={buttonsImg} alt="Buttons" />
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostCard;
