import React from 'react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Modal from '../Modal/Modal';
import { useAuth } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import iconMenu from '../../svg/svg.svg';
import css from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modal.isOpen);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      <header className={css.header}>
        <div className={`${css.navigation}`}>
          <Navigation />
        </div>
        {isLoggedIn ? (
          <div className={`${css.userMenu}`}>
            <UserMenu />
          </div>
        ) : (
          <div className={`${css.authNav}`}>
            <AuthNav />
          </div>
        )}
        <div className={css.navMenuButton} onClick={handleOpenModal}>
          <svg>
            <use href={`${iconMenu}#icon-menu`} />
          </svg>
        </div>
      </header>
      <Modal />
    </>
  );
};

export default AppBar;
