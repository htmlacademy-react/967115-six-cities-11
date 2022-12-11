import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {sortingByOption} from '../../utils';
import { changeActivePlaceCardID } from '../../store/offers/offers';
import {getActiveSortOption} from '../../store/sort/selectors';
import cn from 'classnames';


type PlaceCardsProps = {
  offers: Offer[];
  isNearby: boolean;
}

function PlaceCards ({offers, isNearby}: PlaceCardsProps):JSX.Element {
  const activeSortOption = useAppSelector(getActiveSortOption);
  const dispatch = useAppDispatch();

  const sortedOffers = sortingByOption(activeSortOption, offers);

  const handlePlaceCardMouseEnter = (offer: Offer) => {
    dispatch(changeActivePlaceCardID(offer.id));
  };

  const handlePlaceCardMouseLeave = (offer: Offer) => {
    dispatch(changeActivePlaceCardID(null));
  };

  return (
    <div
      className={cn(
        'places__list',
        {'cities__places-list': !isNearby},
        {'tabs__content': !isNearby},
        {'near-places__list': isNearby}
      )}
    >
      {sortedOffers.map((offer) =>
        (
          <PlaceCard
            offer={offer}
            key={offer.id}
            handlePlaceCardMouseEnter={handlePlaceCardMouseEnter}
            handlePlaceCardMouseLeave={handlePlaceCardMouseLeave}
            isNearby={isNearby}
          />
        ))}
    </div>
  );
}

export default PlaceCards;
