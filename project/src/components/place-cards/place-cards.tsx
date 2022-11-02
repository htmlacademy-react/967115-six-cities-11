import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';
import {useState} from 'react';

type PlaceCardsProps = {
  offers: Offer[];
}

function PlaceCards ({offers}: PlaceCardsProps):JSX.Element {
  const [, setActivePlaceCardId] = useState(0);

  const handlePlaceCardMouseEnter = (offer: Offer) => {
    setActivePlaceCardId(offer.id);
  };

  return (
    <div
      className="cities__places-list places__list tabs__content"
    >
      {offers.map((offer) => <PlaceCard offer={offer} key={offer.id} handlePlaceCardMouseEnter={handlePlaceCardMouseEnter} />)}
    </div>
  );
}

export default PlaceCards;
