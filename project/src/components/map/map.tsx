import {City} from '../../types/city';

type MapProps = {
  city: City;
}

function Map ({city}: MapProps):JSX.Element {
  return (
    <section 
      className="cities__map map"
      style={{height: '794px'}}
    >
    </section>
  );
}

export default Map;