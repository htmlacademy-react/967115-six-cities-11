import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';

type PlaceCardsProps = {
  offers: Offer[];
}

function PlaceCards (offers: PlaceCardsProps):JSX.Element {
  return (
    <>
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
    </>
  );
}

export default PlaceCards;
