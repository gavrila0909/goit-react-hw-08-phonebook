import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setError('The email is not valid.');
      return;
    }

    const isValidPassword = password.length >= 6;
    if (!isValidPassword) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setError('');

    console.log('Form values:', { name, email, password });

    dispatch(register({ name, email, password }));

    form.reset();
  };

  return (
    <div className={css.registerFormCont}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Username
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className={css.label}>
          Email
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            required
            autoComplete="current-password"
          />
        </label>
        <button type="submit">Register</button>
        {error && <p className={css.error}>{error}</p>}
        <p className={css.registerLink}>
          Already have an account?{' '}
          <Link to="/login" className={css.register}>
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
