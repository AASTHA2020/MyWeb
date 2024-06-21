import React from 'react';
import './TwitterPost.css';

const TwitterPost = () => {
  return (
    <div className="twitter-post">
      <div className="profile">
        <div className="avatar"></div>
        <div className="user-info">
          <h3>Aastha Modi</h3>
          <p>@aasthaaa_11</p>
        </div>
      </div>
      <div className="post-content">
        <p>👋 Hello there! I'm actively seeking for a junior developer role and would love to hear from you</p>
      </div>
    </div>
  );
};

export default TwitterPost;
