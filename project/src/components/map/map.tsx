import {City} from '../../types/city';
import { Offer } from '../../types/offer';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import {useAppSelector} from '../../hooks/index';
import { Icon, Marker, LayerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[];
}

const defaultCustomIcon = new Icon ({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [14, 19]
});

const activeCustomIcon = new Icon ({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [14, 19]
});

function Map ({city, offers}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(city, mapRef);
  const activePlaceCardID = useAppSelector((state) => state.activePlaceCardID);

  useEffect(() => {
    const offersLayer = new LayerGroup ();
    if (map) {
      const {latitude, longitude, zoom} = city.location;
      offersLayer.addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon((offer.id === activePlaceCardID) ? activeCustomIcon : defaultCustomIcon).addTo(offersLayer);
      });
      map.setView([latitude, longitude], zoom);
    }

    return () => {
      offersLayer.clearLayers();
    };
  }, [map, offers, city.location, activePlaceCardID]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
