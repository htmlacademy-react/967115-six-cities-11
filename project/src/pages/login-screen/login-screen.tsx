import {Link, useNavigate, Navigate} from 'react-router-dom';
import {useRef, FormEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {AuthData} from '../../types/auth-data';
import {loginAction} from '../../store/api-actions';
import {AppRoutes} from '../../constants';
import { selectAuthorizationStatus } from '../../store/user/selectors';
import { AuthorizationStatuses } from '../../constants';

function LoginScreen ():JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    navigate(AppRoutes.Root);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null && regexp.test(passwordRef.current.value)) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value
      });
    }
  };

  const regexp = new RegExp('(?=.*[a-z])(?=.*\\d)');

  return (
    authorizationStatus === AuthorizationStatuses.Auth
      ? <Navigate to={AppRoutes.Root}/>
      : (
        <div className="page page--gray page--login">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <Link className="header__logo-link" to="/">
                    <img
                      className="header__logo"
                      src="img/logo.svg"
                      alt="6 cities logo"
                      width={81}
                      height={41}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </header>
          <main className="page__main page__main--login">
            <div className="page__login-container container">
              <section className="login">
                <h1 className="login__title">Sign in</h1>
                <form
                  className="login__form form"
                  action="#"
                  method="post"
                  onSubmit={handleFormSubmit}
                >
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">E-mail</label>
                    <input
                      className="login__input form__input"
                      ref={loginRef}
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">Password</label>
                    <input
                      className="login__input form__input"
                      ref={passwordRef}
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button className="login__submit form__submit button" type="submit">
                    Sign in
                  </button>
                </form>
              </section>
              <section className="locations locations--login locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="/">
                    <span>Amsterdam</span>
                  </Link>
                </div>
              </section>
            </div>
          </main>
        </div>
      )
  );
}

export default LoginScreen;
