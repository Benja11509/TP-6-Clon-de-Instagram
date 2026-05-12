import React from 'react';

const Post = ({ post, onPostClick, onLike, isLiked }) => {
  const handleLikeClick = (e) => {
    e.stopPropagation();
    onLike(post.id);
  };

  return (
    <article className="post" onClick={() => onPostClick(post)}>
      <div className="post-header">
        <div className="post-user-info">
          <img src={post.avatar} alt={post.username} className="post-avatar" />
          <div className="user-details">
            <p className="username">{post.username}</p>
            <p className="timestamp">{post.timestamp}</p>
          </div>
        </div>
        <button className="more-options">⋯</button>
      </div>

      <div className="post-image-container">
        <img src={post.image} alt="Post" className="post-image" />
      </div>

      <div className="post-actions">
        <button
          className={`action-btn like-btn ${isLiked ? 'liked' : ''}`}
          onClick={handleLikeClick}
          title="Like"
        >
          {isLiked ? '❤️' : '🤍'}
        </button>
        <button className="action-btn" title="Comment">
          💬
        </button>
        <button className="action-btn" title="Share">
          📤
        </button>
        <button className="action-btn save-btn" title="Save">
          🔖
        </button>
      </div>

      <div className="post-stats">
        <p className="likes-count">{isLiked ? post.likes_count + 1 : post.likes_count} likes</p>
      </div>

      <div className="post-content">
        <p className="caption">
          <span className="username-inline">{post.username}</span> {post.caption}
        </p>
      </div>

      <div className="post-comments">
        {post.comments && post.comments.slice(0, 2).map((comment, index) => (
          <p key={index} className="comment">
            <span className="comment-author">{comment.author}</span> {comment.text}
          </p>
        ))}
      </div>
    </article>
  );
};

export default Post;