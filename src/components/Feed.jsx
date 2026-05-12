import React from 'react';
import Post from './Post';

const Feed = ({ posts, onPostClick, onLike, likes }) => {
  return (
    <div className="feed-container">
      <div className="feed">
        {posts && posts.length > 0 ? (
          posts.map(post => (
            <Post
              key={post.id}
              post={post}
              onPostClick={onPostClick}
              onLike={onLike}
              isLiked={likes[post.id]}
            />
          ))
        ) : (
          <div className="no-posts">No hay publicaciones</div>
        )}
      </div>
    </div>
  );
};

export default Feed;