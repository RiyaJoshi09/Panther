import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log('Registered user:', user.email);
      alert(`Welcome, ${formData.name}! Your account has been created.`);
      navigate('/signup');
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.message);
    }
  };

  return (
    <div className="login-page">
      <Paper className="login-container" elevation={3}>
        <Typography variant="h5">
          Register
        </Typography>
        <form onSubmit={handleSubmit} className="login-form">
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            variant="outlined"
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="register-button"
          >
            Create Account
          </Button>
        </form>
      </Paper>
    </div>
  );
}