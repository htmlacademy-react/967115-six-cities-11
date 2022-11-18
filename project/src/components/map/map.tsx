import {City} from '../../types/city';
import {useRef} from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
}

function Map ({city}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(city, mapRef);

  return (
    <section
      className="cities__map map"
      style={{height: '794px'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
