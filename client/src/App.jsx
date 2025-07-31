import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus(data.message || 'Login failed');
      }
    } catch (err) {
      setStatus('Network error');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setStatus('');
  };

  if (status === 'success') {
    return (
      <div className="blog-page">
        <header className="blog-header">
          <div className="blog-avatar">{username.charAt(0).toUpperCase()}</div>
          <div>
            <h1 className="blog-title">Welcome, {username}!</h1>
            <p className="blog-subtitle">Here are the latest stories for you</p>
          </div>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </header>
        <main className="blog-list">
          <article className="blog-card">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Nature" className="blog-img" />
            <div className="blog-content">
              <h2>Discovering the Beauty of Nature</h2>
              <p>Explore the wonders of the natural world and find peace in the outdoors. From mountain hikes to tranquil lakes, nature has something for everyone.</p>
              <span className="blog-meta">By Jane Doe · 2 hours ago</span>
            </div>
          </article>
          <article className="blog-card">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Tech" className="blog-img" />
            <div className="blog-content">
              <h2>The Future of Technology</h2>
              <p>Stay ahead with the latest trends in technology, from AI breakthroughs to the newest gadgets that are changing the way we live and work.</p>
              <span className="blog-meta">By John Smith · 5 hours ago</span>
            </div>
          </article>
          <article className="blog-card">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Food" className="blog-img" />
            <div className="blog-content">
              <h2>Delicious Recipes for Every Day</h2>
              <p>Find inspiration for your next meal with these easy and delicious recipes, perfect for busy weeknights or special occasions.</p>
              <span className="blog-meta">By Chef Alex · 1 day ago</span>
            </div>
          </article>
          <article className="blog-card">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Nature" className="blog-img" />
            <div className="blog-content">
              <h2>Discovering the Beauty of Nature</h2>
              <p>Explore the wonders of the natural world and find peace in the outdoors. From mountain hikes to tranquil lakes, nature has something for everyone.</p>
              <span className="blog-meta">By Jane Doe · 2 hours ago</span>
            </div>
          </article>
          <article className="blog-card">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Tech" className="blog-img" />
            <div className="blog-content">
              <h2>The Future of Technology</h2>
              <p>Stay ahead with the latest trends in technology, from AI breakthroughs to the newest gadgets that are changing the way we live and work.</p>
              <span className="blog-meta">By John Smith · 5 hours ago</span>
            </div>
          </article>
          <article className="blog-card">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Food" className="blog-img" />
            <div className="blog-content">
              <h2>Delicious Recipes for Every Day</h2>
              <p>Find inspiration for your next meal with these easy and delicious recipes, perfect for busy weeknights or special occasions.</p>
              <span className="blog-meta">By Chef Alex · 1 day ago</span>
            </div>
          </article>
        </main>
      </div>
    );
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="avatar">
          <span role="img" aria-label="user">👤</span>
        </div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        {status && status !== 'success' && <div className="error">{status}</div>}
      </form>
    </div>
  );
}

export default App;
