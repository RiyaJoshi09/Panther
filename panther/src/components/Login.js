import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'; // <-- Import this
import '../styles/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // <-- Create navigate instance

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in:', user.email);
      alert(`Welcome back, ${user.email}!`);
      navigate('/'); // <-- Redirect to Home
    } catch (error) {
      console.error('Login error:', error);
      alert(error.message);
    }
  };

  return (
    <div className="login-page">
      <Paper className="login-container" elevation={3}>
        <Typography variant="h5" className="login-title">
          Login
        </Typography>
        <form onSubmit={handleSubmit} className="login-form">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="login-button"
            sx={{ backgroundColor: '#ff8a65', '&:hover': { backgroundColor: '#e67650' } }}
          >
            Log in
          </Button>
        </form>
        <Typography variant="body2" className="register-note" style={{ marginTop: '1rem' }}>
        Don’t have an account? <span className="login-link" onClick={() => navigate('/register')} style={{ color: '#ff7043', cursor: 'pointer' }}>Register here</span>
        </Typography>
      </Paper>
    </div>
  );
}
