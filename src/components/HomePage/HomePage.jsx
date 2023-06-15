// src/components/HomePage/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import PostCard from '../PostCard/PostCard';
import CreatePostCard from '../PostCard/CreatePostCard';
import './HomePage.css';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [pageName, setPageName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('fbToken');
    const userId = localStorage.getItem('fbUserId');

    if (!accessToken) {
      navigate('/login');
    } else {
      axios.get(`https://graph.facebook.com/${userId}?fields=name&access_token=${accessToken}`)
        .then(response => {
          setUsername(response.data.name);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          navigate('/login');
        });

      axios.get(`https://graph.facebook.com/113209371802031?fields=name,feed{message,attachments{media},created_time}&access_token=${accessToken}`)
        .then(response => {
          setPosts(response.data.feed.data);
          setPageName(response.data.name);
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('fbToken');
    localStorage.removeItem('fbUserId');
    navigate('/login');
  };

  return (
    <div className="homePage">
      <Navbar username={username} onLogout={handleLogout} />
      <h2>{pageName}</h2>
      <CreatePostCard />
      <div className="content">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      </div>
    </div>
  );
};

export default HomePage;
