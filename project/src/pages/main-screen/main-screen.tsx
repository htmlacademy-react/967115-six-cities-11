import { Link } from 'react-router-dom';
import PlaceCards from '../../components/place-cards/place-cards';
import Map from '../../components/map/map';
import NoCityOffers from '../../components/no-city-offers/no-city-offers';
import { CITIES } from '../../constants';
import CitiesList from '../../components/cities-list/cities-list';
import {useAppSelector} from '../../hooks/index';
import {offersInCity} from '../../utils';
import SortOptions from '../../components/sort-options/sort-options';
import LoadingOffers from '../../components/loading-offers/loading-offers';
import UserNavigation from '../../components/user-navigation/user-navigation';
import {selectOffers, selectOffersLoadingStatus} from '../../store/offers/selectors';
import {selectCity} from '../../store/city/selectors';

function MainScreen ():JSX.Element {
  const offers = useAppSelector(selectOffers);
  const city = useAppSelector(selectCity);
  const isOffersDataLoading = useAppSelector(selectOffersLoadingStatus);
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
            <UserNavigation/>
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
          {
            isOffersDataLoading
              ? <LoadingOffers/>
              : (cityOffers.length === 0 && <NoCityOffers city={city}/>) || (
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
                    <SortOptions/>
                    <PlaceCards offers={cityOffers} isNearby={false}/>
                  </section>
                  <div className="cities__right-section">
                    <Map city={city} offers={cityOffers}/>
                  </div>
                </div>
              )
          }
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
