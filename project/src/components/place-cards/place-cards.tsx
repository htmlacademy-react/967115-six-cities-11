import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';
import {useState} from 'react';

type PlaceCardsProps = {
  offers: Offer[];
}

function PlaceCards ({offers}: PlaceCardsProps):JSX.Element {
  const [firstOffer] = offers;
  const [activeCardID, setActiveCardID] = useState(2);

  return (
    <div className="cities__places-list places__list tabs__content">
      <PlaceCard offer={firstOffer}/>
      <PlaceCard offer={firstOffer}/>
      <PlaceCard offer={firstOffer}/>
    </div>
  );
}

export default PlaceCards;
