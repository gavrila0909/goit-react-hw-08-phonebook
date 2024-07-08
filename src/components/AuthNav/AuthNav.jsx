import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { closeModal } from '../../redux/modal/modalSlice';
import css from './AuthNav.module.css';

const AuthNav = () => {
  const dispatch = useDispatch();

  const handleItemClick = () => {
    dispatch(closeModal());
  };

  return (
    <nav className={css.authNavContainer}>
      <NavLink className={css.link} to="/register" onClick={handleItemClick}>
        Register
      </NavLink>
      <NavLink className={css.link} to="/login" onClick={handleItemClick}>
        Log In
      </NavLink>
    </nav>
  );
};

export default AuthNav;
