import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import {setStarRating, offersInCity} from '../../utils';
import { fetchFavoriteOffersAction, changeFavoriteStatus, fetchOffersAction } from '../../store/api-actions';
import { store } from '../../store';
import cn from 'classnames';

type CityCardsProps = {
  city: string;
  offers: Offer[];
}

function CityCards ({city, offers}: CityCardsProps): JSX.Element {
  const cityOffers = offersInCity(offers, city);

  const handleFavoriteButtonClick = async (offer: Offer) => {
    await store.dispatch(changeFavoriteStatus([offer.id, offer.isFavorite ? 0 : 1]));
    await store.dispatch(fetchFavoriteOffersAction());
    await store.dispatch(fetchOffersAction());
  };

  const onFavoriteButtonClick = (offer: Offer) => {
    handleFavoriteButtonClick(offer);
  };

  return (
    <>
      {cityOffers.map((cityOffer) =>
      { const {price, id, isPremium, previewImage, rating, title, type, isFavorite} = cityOffer;
        return (
          <article key={id} className="favorites__card place-card">
            {
              isPremium &&
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
            }
            <div className="favorites__image-wrapper place-card__image-wrapper">
              <Link to={`../offer/${cityOffer.id}`} >
                <img
                  className="place-card__image"
                  src={previewImage}
                  width={150}
                  height={110}
                  alt=""
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
                  className={cn(
                    'place-card__bookmark-button',
                    'button',
                    {'place-card__bookmark-button--active': isFavorite}
                  )}
                  onClick={() => onFavoriteButtonClick(cityOffer)}
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
                  <span style={{ width: `${setStarRating(rating)}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link to={`../offer/${cityOffer.id}`} >{title}</Link>
              </h2>
              <p className="place-card__type">{type}</p>
            </div>
          </article>);}
      )}
    </>
  );
}

export default CityCards;
