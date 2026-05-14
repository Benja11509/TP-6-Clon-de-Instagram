import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Feed from './components/Feed';
import Profile from './components/Profile';
import PostDetail from './components/PostDetail';

import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('feed');
  const [selectedPost, setSelectedPost] = useState(null);
  const [likes, setLikes] = useState({});

  const [userProfile] = useState({
    username: 'catgram.user',
    fullName: 'Benjamin Liberman',
    avatar: 'https://i.pravatar.cc/200?img=12',
    bio: '🐱 Cat lover | React developer | Photography',
    followers: '121K',
    following: '900K',
    postsCount: 12,
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search?limit=12'
      );

      const generatedPosts = response.data.map((imageData, index) => ({
        id: imageData.id,
        image: imageData.url,
        username: `cat_user_${index + 1}`,
        caption: 'Hermoso gatito del día 🐱✨',
        likes_count: Math.floor(Math.random() * 5000) + 500,
        timestamp: `${Math.floor(Math.random() * 12) + 1}h`,
        avatar: `https://i.pravatar.cc/100?img=${index + 20}`,
        comments: [
          {
            author: 'sofia_dev',
            text: 'Qué lindo 😍',
          },
          {
            author: 'reactlover',
            text: 'Excelente foto 🔥',
          },
        ],
      }));

      setPosts(generatedPosts);

      const initialLikes = {};

      generatedPosts.forEach((post) => {
        initialLikes[post.id] = false;
      });

      setLikes(initialLikes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = (postId) => {
    setLikes((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="app">
      {/* SIDEBAR */}

      <aside className="sidebar">
        <div>
          <h1 className="logo">Instagram</h1>

          <div className="profile-card">
            <img src={userProfile.avatar} alt="" />

            <h2>{userProfile.fullName}</h2>

            <p>@{userProfile.username}</p>

            <div className="profile-stats-box">
              <div>
                <span>{userProfile.followers}</span>
                <p>Followers</p>
              </div>

              <div>
                <span>{userProfile.following}</span>
                <p>Following</p>
              </div>
            </div>
          </div>

          <nav className="sidebar-nav">
            <button
              className={`nav-item ${currentView === 'feed' ? 'active' : ''}`}
              onClick={() => setCurrentView('feed')}
            >
              🏠 Home
            </button>

            <button
              className={`nav-item ${currentView === 'profile' ? 'active' : ''}`}
              onClick={() => setCurrentView('profile')}
            >
              👤 Profile
            </button>

            <button className="nav-item">🔥 Trending</button>
            <button className="nav-item">💬 Messages</button>
            <button className="nav-item">❤️ Notifications</button>
          </nav>
        </div>
      </aside>

      {/* MAIN */}

      <main className="main-content">
        {/* TOPBAR */}

        <header className="topbar">
          <input
            type="text"
            placeholder="Search users, hashtags and stories"
          />

          <div className="topbar-actions">
            <button>⚙️</button>
            <button>📷</button>
            <button>✈️</button>
            <button className="new-post-btn">+ New Post</button>
          </div>
        </header>

        {/* STORIES */}

        <section className="stories-section">
          <h2>STORIES</h2>

          <div className="stories-container">
            {posts.slice(0, 7).map((post) => (
              <div key={post.id} className="story">
                <img src={post.image} alt="" />
                <p>@{post.username}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEED */}

        {loading ? (
          <div className="loading-screen">
            <div className="spinner"></div>
          </div>
        ) : currentView === 'feed' ? (
          <Feed
            posts={posts}
            onPostClick={setSelectedPost}
            onLike={handleLike}
            likes={likes}
          />
        ) : (
          <Profile userProfile={userProfile} posts={posts} />
        )}
      </main>

      {/* MODAL */}

      {selectedPost && (
        <PostDetail
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onLike={handleLike}
          isLiked={likes[selectedPost.id]}
        />
      )}
    </div>
  );
}

export default App;