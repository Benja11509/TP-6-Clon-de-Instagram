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
    username: 'gato_enthusiast',  
    fullName: 'Cat Lover Pro',  
    avatar: 'https://i.pravatar.cc/150?img=1',  
    bio: '🐱 Amante de gatos | Fotógrafa de felinos | Buenos Aires, Argentina',  
    followers: 2450,  
    following: 856,  
    postsCount: 124,  
  });  

  useEffect(() => {  
    fetchPosts();  
  }, []);  

  const fetchPosts = async () => {  
    try {  
      const postsData = [];  
      for (let i = 0; i < 12; i++) {  
        const response = await axios.get(  
          `https://api.thecatapi.com/v1/images/search?limit=1`  
        );  
        const imageData = response.data[0];  
        postsData.push({  
          id: imageData.id,  
          image: imageData.url,  
          username: `gato_user_${i + 1}`,  
          caption: `Adorable gatito #${i + 1} 🐱 #gatos #cute #fluffy`,  
          likes_count: Math.floor(Math.random() * 5000) + 100,  
          timestamp: new Date(Date.now() - Math.random() * 86400000).toLocaleString('es-AR'),  
          avatar: `https://i.pravatar.cc/40?img=${i}`,  
          comments: [  
            { author: 'usuario1', text: '¡Muy lindo! 😍' },  
            { author: 'usuario2', text: 'Los gatos son los mejores' },  
          ],  
        });  
      }  
      setPosts(postsData);  
      const likesObj = {};  
      postsData.forEach(post => {  
        likesObj[post.id] = false;  
      });  
      setLikes(likesObj);  
    } catch (error) {  
      console.error('Error al obtener imágenes:', error);  
    } finally {  
      setLoading(false);  
    }  
  };  

  const handlePostClick = (post) => {  
    setSelectedPost(post);  
  };  

  const handleLike = (postId) => {  
    setLikes(prev => ({  
      ...prev,  
      [postId]: !prev[postId]  
    }));  
  };  

  const closeModal = () => {  
    setSelectedPost(null);  
  };  

  return (  
    <div className="app">  
      return (
  <div className="app">

    <aside className="sidebar">

      <h1 className="logo">CatGram</h1>

      <ul>

        <li onClick={() => setCurrentView('feed')}>
          <span className="icon">🏠</span>
          <span>Inicio</span>
        </li>

        <li onClick={() => setCurrentView('profile')}>
          <span className="icon">👤</span>
          <span>Perfil</span>
        </li>

        <li>
          <span className="icon">🔍</span>
          <span>Buscar</span>
        </li>

        <li>
          <span className="icon">❤️</span>
          <span>Notificaciones</span>
        </li>

        <li>
          <span className="icon">➕</span>
          <span>Crear</span>
        </li>

      </ul>

    </aside>

    <main className="main-content">

      {loading ? (

        <div className="loading">
          <div className="spinner"></div>
          <p>Cargando publicaciones...</p>
        </div>

      ) : currentView === 'feed' ? (

        <Feed
          posts={posts}
          onPostClick={handlePostClick}
          onLike={handleLike}
          likes={likes}
        />

      ) : (

        <Profile
          userProfile={userProfile}
          posts={posts}
        />

      )}

    </main>

    {selectedPost && (
      <PostDetail
        post={selectedPost}
        onClose={closeModal}
        onLike={handleLike}
        isLiked={likes[selectedPost.id]}
      />
    )}

  </div>
);

      <main className="main-content">  
        {loading ? (  
          <div className="loading">  
            <div className="spinner"></div>  
            <p>Cargando publicaciones...</p>  
          </div>  
        ) : currentView === 'feed' ? (  
          <Feed  
            posts={posts}  
            onPostClick={handlePostClick}  
            onLike={handleLike}  
            likes={likes}  
          />  
        ) : (  
          <Profile userProfile={userProfile} posts={posts} />  
        )}  
      </main>
            {selectedPost && (
        <PostDetail
          post={selectedPost}
          onClose={closeModal}
          onLike={handleLike}
          isLiked={likes[selectedPost.id]}
        />
      )}
    </div>
  );
}

export default App;