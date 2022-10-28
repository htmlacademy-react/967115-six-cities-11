import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';

type PlaceCardsProps = {
  offers: Offer[];
}

function PlaceCards ({offers}: PlaceCardsProps):JSX.Element {
  const [firstOffer] = offers;

  return (
    <>
      <PlaceCard offer={firstOffer}/>
      <PlaceCard offer={firstOffer}/>
      <PlaceCard offer={firstOffer}/>
    </>
  );
}

export default PlaceCards;
