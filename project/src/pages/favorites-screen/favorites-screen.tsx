import {Offer} from '../../types/offer';
import {Cities} from '../../constants';
import {Filter} from '../../utils';
import {Link} from 'react-router-dom';

type FavoritesScreenProps = {
  offers: Offer[];
}

function formCards (city: string, offers: Offer[]) {
  const cityOffers = Filter[city](offers);
  return (
    <>
      {cityOffers.map((cityOffer) =>
      { const {price, id} = cityOffer;
        return (
          <article key={id} className="favorites__card place-card">
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
            <div className="favorites__image-wrapper place-card__image-wrapper">
              <Link to={`../offer/${cityOffer.id}`} >
                <img
                  className="place-card__image"
                  src="img/apartment-small-03.jpg"
                  width={150}
                  height={110}
                  alt="Place"
                />
              </Link>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">€{price}</b>
                  <span className="place-card__price-text">
                      /&nbsp;night
                  </span>
                </div>
                <button
                  className="place-card__bookmark-button place-card__bookmark-button--active button"
                  type="button"
                >
                  <svg
                    className="place-card__bookmark-icon"
                    width={18}
                    height={19}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{ width: '100%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link to={`../offer/${cityOffer.id}`} >Nice, cozy, warm big bed apartment</Link>
              </h2>
              <p className="place-card__type">Apartment</p>
            </div>
          </article>);}
      )}
    </>
  );
}

function FavoritesScreen ({offers}: FavoritesScreenProps): JSX.Element {
  const cities = Object.values(Cities);
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
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to='/' className="header__nav-link header__nav-link--profile">
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
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                cities.map((city) =>
                  (Filter[city](offers).length === 0) ? ''
                    : (
                      <li key={city} className="favorites__locations-items">
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <Link className="locations__item-link" to="/">
                              <span>{city}</span>
                            </Link>
                          </div>
                        </div>
                        <div className="favorites__places">
                          {formCards(city, offers)}
                        </div>
                      </li>)
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
