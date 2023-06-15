// src/components/PostCard/PostCard.jsx
import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  const imageUrl = post.attachments?.data[0]?.media?.image?.src;

  return (
    <div>
      <p>{post.message}</p>
      {imageUrl && <img src={imageUrl} alt="Post" />}
    </div>
  );
};

export default PostCard;
