import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';
import {useState} from 'react';
import {useAppSelector} from '../../hooks/index';
import {sortingByOption} from '../../utils';


type PlaceCardsProps = {
  offers: Offer[];
}

function PlaceCards ({offers}: PlaceCardsProps):JSX.Element {
  const [, setActivePlaceCardId] = useState(0);
  const activeSortOption = useAppSelector((state) => state.activeSortOption);

  const sortedOffers = sortingByOption(activeSortOption, offers);

  const handlePlaceCardMouseEnter = (offer: Offer) => {
    setActivePlaceCardId(offer.id);
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
          />
        ))}
    </div>
  );
}

export default PlaceCards;
