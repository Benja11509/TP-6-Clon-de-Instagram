import React from 'react';

const Header = ({ currentView, userProfile }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo">📸 CatGram</h1>
        </div>
        
        {currentView === 'feed' && (
          <div className="header-icons">
            <button className="icon-btn" title="Likes">
              ❤️
            </button>
            <button className="icon-btn" title="Messages">
              💬
            </button>
            <button className="icon-btn" title="Notifications">
              🔔
            </button>
          </div>
        )}

        {currentView === 'profile' && (
          <div className="profile-header-info">
            <span className="header-username">{userProfile.username}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;