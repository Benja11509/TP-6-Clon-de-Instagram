import React from 'react';

const PostDetail = ({ post, isLiked, onLike, onClose }) => {
  if (!post) return null;

  const handleLikeClick = (e) => {
    e.stopPropagation();
    onLike(post.id);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-body">
          <div className="modal-image-section">
            <img src={post.image} alt="Post detail" className="modal-image" />
          </div>

          <div className="modal-info-section">
            <div className="modal-header">
              <div className="modal-user-info">
                <img src={post.avatar} alt={post.username} className="modal-avatar" />
                <div>
                  <p className="modal-username">{post.username}</p>
                  <p className="modal-timestamp">{post.timestamp}</p>
                </div>
              </div>
              <button className="more-options">⋯</button>
            </div>

            <div className="modal-caption-section">
              <p className="modal-caption">
                <span className="username-inline">{post.username}</span> {post.caption}
              </p>
            </div>

            <div className="modal-comments-section">
              <h3>Comentarios</h3>
              {post.comments && post.comments.map((comment, index) => (
                <div key={index} className="modal-comment">
                  <strong>{comment.author}</strong>
                  <p>{comment.text}</p>
                </div>
              ))}
              <div className="modal-comment add-comment">
                <input type="text" placeholder="Añadir comentario..." />
                <button>📤</button>
              </div>
            </div>

            <div className="modal-divider"></div>

            <div className="modal-stats">
              <p className="modal-likes">{isLiked ? post.likes_count + 1 : post.likes_count} Me gusta</p>
            </div>

            <div className="modal-actions">
              <button
                className={`modal-action-btn like-btn ${isLiked ? 'liked' : ''}`}
                onClick={handleLikeClick}
              >
                {isLiked ? '❤️' : '🤍'} Me gusta
              </button>
              <button className="modal-action-btn">
                💬 Comentar
              </button>
              <button className="modal-action-btn">
                📤 Compartir
              </button>
              <button className="modal-action-btn">
                🔖 Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;