import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!email.trim() || !password.trim()) {
      setError('Email and password cannot be empty.');
      return;
    }

    try {
      await dispatch(logIn({ email, password }));
      form.reset();
      setError('');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className={css.loginFormCont}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            autoFocus
            id="email"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
            id="password"
          />
        </label>
        <button type="submit">Log In</button>
        {error && <p className={css.error}>{error}</p>}
        <p className={css.registerLink}>
          Don't have an account?{' '}
          <Link to="/register" className={css.register}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
