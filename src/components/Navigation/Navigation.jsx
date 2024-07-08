import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { closeModal } from '../../redux/modal/modalSlice';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const handleItemClick = () => {
    dispatch(closeModal());
  };

  return (
    <nav className={css.navigationContainer}>
      <NavLink className={css.link} to="/" onClick={handleItemClick}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts" onClick={handleItemClick}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
