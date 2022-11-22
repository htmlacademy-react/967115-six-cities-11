import {City} from '../../types/city';
import {Link} from 'react-router-dom';

type CitiesListProps = {
  cities: City[];
}

function CitiesList ({cities}: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => (
          <li className="locations__item" key={city.name}>
            <Link className="locations__item-link tabs__item" to="/">
              <span>{city.name}</span>
            </Link>
          </li>
        ))
      }
      {/*
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="/">
          <span>Paris</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="/">
          <span>Cologne</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="/">
          <span>Brussels</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item tabs__item--active" to='/'>
          <span>Amsterdam</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="/">
          <span>Hamburg</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="/">
          <span>Dusseldorf</span>
        </Link>
      </li> */}
    </ul>
  );
}

export default CitiesList;
