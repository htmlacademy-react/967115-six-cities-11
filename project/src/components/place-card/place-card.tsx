import {Offer} from '../../types/offer';
import {setStarRating} from '../../utils';
import {Link} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import {selectAuthorizationStatus} from '../../store/user/selectors';
import { store } from '../../store';
import { AuthorizationStatuses } from '../../constants';
import { changeFavoriteStatus, fetchOffersAction, fetchFavoriteOffersAction } from '../../store/api-actions';
import cn from 'classnames';

type PlaceCardProps = {
  offer: Offer;
  handlePlaceCardMouseEnter: (offer: Offer) => void;
  handlePlaceCardMouseLeave: (offer: Offer) => void;
  isNearby: boolean;
}

function PlaceCard ({
  offer,
  handlePlaceCardMouseEnter,
  handlePlaceCardMouseLeave,
  isNearby}: PlaceCardProps): JSX.Element {

  const {
    isPremium,
    isFavorite,
    previewImage,
    type,
    price,
    title,
    rating,
    id
  } = offer;

  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const handleFavoriteButtonClick = async () => {
    await store.dispatch(changeFavoriteStatus([id, isFavorite ? 0 : 1]));
    await store.dispatch(fetchOffersAction());
    await store.dispatch(fetchFavoriteOffersAction());
  };

  const onFavoriteButtonClick = () => {
    handleFavoriteButtonClick();
  };

  return (
    <article
      className={cn(
        'place-card',
        {'cities__card': !isNearby},
        {'near-places__card': isNearby}
      )}
      onMouseEnter={!isNearby ? () => handlePlaceCardMouseEnter(offer) : undefined}
      onMouseLeave={!isNearby ? () => handlePlaceCardMouseLeave(offer) : undefined}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div
        className={cn(
          'place-card__image-wrapper',
          {'cities__image-wrapper': !isNearby},
          {'near-places__image-wrapper': isNearby}
        )}
      >
        <Link to={`../offer/${offer.id}`} >
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt=""
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
            className={cn(
              'place-card__bookmark-button',
              'button',
              {'place-card__bookmark-button--active': authorizationStatus === AuthorizationStatuses.Auth && isFavorite}
            )}
            type="button"
            onClick={onFavoriteButtonClick}
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
