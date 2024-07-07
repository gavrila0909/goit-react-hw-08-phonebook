import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../../components/Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { closeModal } from '../../redux/modal/modalSlice';
import css from './Modal.module.css';

const Modal = () => {
  const { isLoggedIn } = useAuth();
  const isOpen = useSelector(state => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={handleClose}>
          X
        </button>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </div>
  );
};

export default Modal;
