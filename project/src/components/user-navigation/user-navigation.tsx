import { Link, useNavigate } from 'react-router-dom';
import {AuthorizationStatus} from '../../constants';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {logoutAction} from '../../store/api-actions';
import {AppRoutes} from '../../constants';

function UserNavigation (): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <nav className="header__nav">
      {
        authorizationStatus === AuthorizationStatus.Auth
          ? (
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to="/favorites"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                  </span>
                  <span className="header__favorite-count">3</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <button
                  className="header__nav-link border-solid"
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(logoutAction());
                    navigate(AppRoutes.Root);
                  }}
                >
                  <span className="header__signout">Sign out</span>
                </button>
              </li>
            </ul>
          )
          : (
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to="/login">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Sign in</span>
                </Link>
              </li>
            </ul>
          )
      }
    </nav>
  );
}

export default UserNavigation;
