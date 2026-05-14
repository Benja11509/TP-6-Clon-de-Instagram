import React from 'react';
import Post from './Post';

function Feed({ posts, onPostClick, onLike, likes }) {
  return (
    <div className="feed-container">
      <h2 className="feed-title">TRENDING</h2>

      <div className="feed">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onPostClick={onPostClick}
            onLike={onLike}
            isLiked={likes[post.id]}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;