import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {sortingByOption} from '../../utils';
import { changeActivePlaceCardID } from '../../store/actions';


type PlaceCardsProps = {
  offers: Offer[];
}

function PlaceCards ({offers}: PlaceCardsProps):JSX.Element {
  const activeSortOption = useAppSelector((state) => state.activeSortOption);
  const dispatch = useAppDispatch();

  const sortedOffers = sortingByOption(activeSortOption, offers);

  const handlePlaceCardMouseEnter = (offer: Offer) => {
    dispatch(changeActivePlaceCardID(offer.id));
  };

  const handlePlaceCardMouseLeave = (offer: Offer) => {
    dispatch(changeActivePlaceCardID(-1));
  };

  return (
    <div
      className="cities__places-list places__list tabs__content"
    >
      {sortedOffers.map((offer) =>
        (
          <PlaceCard
            offer={offer}
            key={offer.id}
            handlePlaceCardMouseEnter={handlePlaceCardMouseEnter}
            handlePlaceCardMouseLeave={handlePlaceCardMouseLeave}
          />
        ))}
    </div>
  );
}

export default PlaceCards;
