// src/components/PostCard/PostCard.jsx
import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  const imageUrl = post.attachments?.data[0]?.media?.image?.src;
  const createdTime = new Date(post.created_time).toLocaleString();

  return (
    <div className="card">
      <p>{post.message}</p>
      {imageUrl && <img src={imageUrl} alt="Post" />}
      <p>Posted on: {createdTime}</p>
    </div>
  );
};


export default PostCard;
