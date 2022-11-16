import {City} from '../../types/city';
import {useRef} from 'react';
import useMap from '../../hooks/use-map';

type MapProps = {
  city: City;
}

function Map ({city}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(city, mapRef);

  return (
    <section
      className="cities__map map"
      style={{height: '794px', width: '682px'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
