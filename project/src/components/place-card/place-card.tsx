import {Offer} from '../../types/offer';
import {MAX_PLACE_RATING} from '../../constants';

type PlaceCardProps = {
  offer: Offer;
}

// Функция приведения числового рейтинга к звездам.
// Нужно получить ширину в процентах от 100
function starRating (rating: number): number {
  return Math.floor(rating) * 100 / MAX_PLACE_RATING;
}

function PlaceCard ({offer}: PlaceCardProps): JSX.Element {
  const {
    isPremium,
    previewImage,
    type,
    price,
    title,
    rating
  } = offer;

  return (
    <article className="cities__card place-card">

      {isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place"
          />
        </a>
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
            todo: вычислить ширину в зависимости от рейтинга
            <span style={{ width: `${starRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">
            {title}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
