import { Link, useNavigate } from 'react-router-dom';
import {AuthorizationStatuses} from '../../constants';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {logoutAction} from '../../store/api-actions';
import {AppRoutes} from '../../constants';
import {selectAuthorizationStatus} from '../../store/user/selectors';

function UserNavigation (): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogoutButtonClick = () => {
    dispatch(logoutAction());
    navigate(AppRoutes.Root);
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          authorizationStatus === AuthorizationStatuses.Auth
            ? (
              <>
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
                    onClick={onLogoutButtonClick}
                  >
                    <span className="header__signout">Sign out</span>
                  </button>
                </li>
              </>
            )
            : (
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to="/login">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Sign in</span>
                </Link>
              </li>
            )
        }
      </ul>
    </nav>
  );
}

export default UserNavigation;
