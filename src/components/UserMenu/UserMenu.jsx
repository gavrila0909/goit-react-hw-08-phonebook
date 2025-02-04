import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <nav className={css.userMenuWrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.logoutBtn} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </nav>
  );
};

export default UserMenu;
