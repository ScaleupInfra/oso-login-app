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
      <div className="logged-in">
        <div className="avatar">{username.charAt(0).toUpperCase()}</div>
        <h2>Welcome, {username}!</h2>
        <p>You are now logged in.</p>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
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
