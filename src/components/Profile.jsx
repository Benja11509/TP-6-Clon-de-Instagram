import React, { useState } from 'react';

const Profile = ({ userProfile, posts }) => {
  const [hoveredPost, setHoveredPost] = useState(null);

  return (
    <div className="profile-container">
      <div className="profile-header-section">
        <div className="profile-info">
          <img src={userProfile.avatar} alt={userProfile.username} className="profile-avatar" />
          
          <div className="profile-details">
            <div className="profile-username-row">
              <h1 className="profile-username">{userProfile.username}</h1>
              <button className="edit-profile-btn">⚙️ Editar perfil</button>
            </div>
            
            <p className="profile-fullname">{userProfile.fullName}</p>
            
            <p className="profile-bio">{userProfile.bio}</p>
            
            <div className="profile-stats">
              <div className="stat">
                <p className="stat-number">{userProfile.postsCount}</p>
                <p className="stat-label">publicaciones</p>
              </div>
              <div className="stat">
                <p className="stat-number">{userProfile.followers.toLocaleString()}</p>
                <p className="stat-label">seguidores</p>
              </div>
              <div className="stat">
                <p className="stat-number">{userProfile.following}</p>
                <p className="stat-label">siguiendo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <button className="tab-btn active">📷 Publicaciones</button>
        <button className="tab-btn">🏷️ Etiquetado</button>
        <button className="tab-btn">❤️ Guardados</button>
      </div>

      <div className="profile-gallery">
        {posts && posts.length > 0 ? (
          posts.map(post => (
            <div
              key={post.id}
              className="gallery-item"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <img src={post.image} alt="Gallery post" className="gallery-image" />
              {hoveredPost === post.id && (
                <div className="gallery-overlay">
                  <span className="gallery-stat">❤️ {post.likes_count}</span>
                  <span className="gallery-stat">💬 {post.comments.length}</span>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-posts-profile">No hay publicaciones aún</div>
        )}
      </div>
    </div>
  );
};

export default Profile;