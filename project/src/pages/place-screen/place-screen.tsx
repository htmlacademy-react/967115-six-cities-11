import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {MAX_PLACE_IMAGES} from '../../constants';
import {setStarRating} from '../../utils';
import UserNavigation from '../../components/user-navigation/user-navigation';
import {useAppSelector} from '../../hooks/index';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { store } from '../../store/index';
import { fetchCurrentOfferAction, fetchReviewsAction, fetchNearbyOffersAction } from '../../store/api-actions';
import Map from '../../components/map/map';
import PlaceCards from '../../components/place-cards/place-cards';
import NotFound404Screen from '../not-found-404-screen/not-found-404-screen';

function PlaceScreen (): JSX.Element {
  const params = useParams();
  const offer = useAppSelector((state) => state.currentOffer);
  const reviews = useAppSelector((state) => state.reviews);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const error = useAppSelector((state) => state.error);

  useEffect(() => {
    if (params.id) {
      store.dispatch(fetchCurrentOfferAction(+params.id));
      store.dispatch(fetchReviewsAction(+params.id));
      store.dispatch(fetchNearbyOffersAction(+params.id));
    }
  }, [params.id]);

  if (error) {
    return <NotFound404Screen/>;
  }

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
      {offer &&
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer.images.slice(0, MAX_PLACE_IMAGES).map((placeImage) => (
                  <div key={placeImage} className="property__image-wrapper">
                    <img
                      className="property__image"
                      src={placeImage}
                      alt=""
                    />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offer.isPremium &&
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className={offer.isFavorite ? 'place-card__bookmark-icon' : 'property__bookmark-icon'} width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${setStarRating(offer.rating)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${offer.bedrooms} Bedroom${offer.bedrooms > 1 ? 's' : ''}`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${offer.maxAdults} adult${offer.maxAdults > 1 ? 's' : ''}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    offer.goods.map((good) => (
                      <li key={good} className="property__inside-item">
                        {good}
                      </li>)
                    )
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (<span className="property__user-status">Pro</span>)}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                    Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} offerID={offer.id}/>
                {/* <ReviewForm offerID={offer.id}/> */}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={offer.city} offers={nearbyOffers}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
                Other places in the neighbourhood
            </h2>
            <PlaceCards offers={nearbyOffers} isNearby/>

          </section>
        </div>
      </main>}
    </div>

  );
}

export default PlaceScreen;
