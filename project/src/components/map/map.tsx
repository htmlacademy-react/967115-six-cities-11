import {City} from '../../types/city';
import { Offer } from '../../types/offer';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT} from '../../constants';

type MapProps = {
  city: City;
  offers: Offer[];
}

const defaultCustomIcon = new Icon ({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 19]
});

function Map ({city, offers}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(city, mapRef);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(defaultCustomIcon).addTo(map);
      });
    }
  }, [map, offers]);

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
