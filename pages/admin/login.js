import { signIn, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) router.push('/admin/dashboard');
  }, [session, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      username: credentials.username,
      password: credentials.password,
    });

    if (result.error) {
      setError('Invalid credentials');
    } else {
      router.push('/admin/dashboard');
    }
  };

  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="login-card">
          <h1>Admin Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .admin-login {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .login-container {
          width: 100%;
          max-width: 400px;
          padding: 20px;
        }
        .login-card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        h1 {
          margin: 0 0 30px;
          color: #333;
          text-align: center;
        }
        input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
        }
        button {
          width: 100%;
          padding: 12px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        }
        button:hover {
          background: #5568d3;
        }
        .error {
          color: #e74c3c;
          font-size: 14px;
          margin: -10px 0 10px;
        }
      `}</style>
    </div>
  );
}
