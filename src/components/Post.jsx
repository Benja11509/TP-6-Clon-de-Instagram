import React, { useState } from 'react';

function Post({ post, onPostClick, onLike, isLiked }) {

  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {

    if(newComment.trim() === '') return;

    const comment = {
      author: 'benjamin_user',
      text: newComment
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className="post">

      {/* HEADER */}

      <div className="post-header">

        <div className="post-user-info">

          <img src={post.avatar} alt="" />

          <div className="post-user-data">
            <span className="post-user">{post.username}</span>
            <span className="post-date">{post.timestamp}</span>
          </div>

        </div>

      </div>

      {/* IMAGE */}

      <img
        src={post.image}
        alt=""
        className="post-image"
        onClick={() => onPostClick(post)}
      />

      {/* ACTIONS */}

      <div className="post-actions">

        <div className="post-left-actions">

          <button onClick={() => onLike(post.id)}>
            {isLiked ? '❤️' : '🤍'}
          </button>

          <button>💬</button>

          <button>✈️</button>

        </div>

        <button>🔖</button>

      </div>

      {/* CONTENT */}

      <div className="post-content">

        <div className="likes">
          {post.likes_count} likes
        </div>

        <div className="caption">
          <strong>{post.username}</strong> {post.caption}
        </div>

        {/* COMMENTS */}

        <div className="comments">

          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <strong>{comment.author}</strong> {comment.text}
            </div>
          ))}

        </div>

        {/* ADD COMMENT */}

        <div className="comment-box">

          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />

          <button onClick={addComment}>
            Post
          </button>

        </div>

      </div>

    </div>
  );
}

export default Post;