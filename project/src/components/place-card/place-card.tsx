import {Offer} from '../../types/offer';
import {setStarRating} from '../../utils';
import {Link} from 'react-router-dom';

type PlaceCardProps = {
  offer: Offer;
  handlePlaceCardMouseEnter: (offer: Offer) => void;
}

function PlaceCard ({offer, handlePlaceCardMouseEnter}: PlaceCardProps): JSX.Element {
  const {
    isPremium,
    previewImage,
    type,
    price,
    title,
    rating
  } = offer;

  return (
    <article className="cities__card place-card" onMouseEnter={() => {handlePlaceCardMouseEnter(offer);}}>
      {isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`../offer/${offer.id}`} >
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${setStarRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`../offer/${offer.id}`} >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
