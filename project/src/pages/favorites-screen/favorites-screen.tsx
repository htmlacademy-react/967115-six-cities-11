import {CITIES} from '../../constants';
import {Link} from 'react-router-dom';
import CityCards from '../../components/city-cards/city-cards';
import UserNavigation from '../../components/user-navigation/user-navigation';
import {offersInCity} from '../../utils';
import {useAppSelector} from '../../hooks/index';
import {selectFavoriteOffers} from '../../store/offers/selectors';

function FavoritesScreen (): JSX.Element {
  const offers = useAppSelector(selectFavoriteOffers);

  return (
    <div className="page">
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
            <UserNavigation/>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                CITIES.map((city) =>
                  (offersInCity(offers, city.name).length !== 0) &&
                      <li key={city.name} className="favorites__locations-items">
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <Link className="locations__item-link" to="/">
                              <span>{city.name}</span>
                            </Link>
                          </div>
                        </div>
                        <div className="favorites__places">
                          <CityCards city={city.name} offers={offers} />
                        </div>
                      </li>
                )
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
