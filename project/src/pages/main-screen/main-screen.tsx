import { Link } from 'react-router-dom';
import PlaceCards from '../../components/place-cards/place-cards';
import Map from '../../components/map/map';
import { CITIES } from '../../constants';
import CitiesList from '../../components/cities-list/cities-list';
import {useAppSelector} from '../../hooks/index';
import {offersInCity} from '../../utils';
import SortOptions from '../../components/sort-options/sort-options';
import LoadingOffers from '../../components/loading-offers/loading-offers';
import {AuthorizationStatus} from '../../constants';

function MainScreen ():JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const cityOffers = offers ? offersInCity(offers, city.name) : [];

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to='/'>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
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
                        <Link className="header__nav-link" to="/">
                          <span className="header__signout">Sign out</span>
                        </Link>
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
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={CITIES}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
              <SortOptions/>
              {
                isOffersDataLoading
                  ? <LoadingOffers/>
                  : <PlaceCards offers={cityOffers}/>
              }
            </section>
            <div className="cities__right-section">
              <Map city={city} offers={cityOffers}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
