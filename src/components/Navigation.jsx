import React from 'react';

const Navigation = ({ currentView, setCurrentView }) => {
  return (
    <nav className="navigation">
      <button
        className={`nav-btn ${currentView === 'feed' ? 'active' : ''}`}
        onClick={() => setCurrentView('feed')}
        title="Feed"
      >
        🏠 Inicio
      </button>
      <button
        className={`nav-btn ${currentView === 'profile' ? 'active' : ''}`}
        onClick={() => setCurrentView('profile')}
        title="Profile"
      >
        👤 Perfil
      </button>
    </nav>
  );
};

export default Navigation;