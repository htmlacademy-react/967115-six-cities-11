import {City} from '../../types/city';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {changeCity} from '../../store/city/city';
import cn from 'classnames';
import {selectCity} from '../../store/city/selectors';

type CitiesListProps = {
  cities: City[];
}

function CitiesList ({cities}: CitiesListProps): JSX.Element {
  const activeCity = useAppSelector(selectCity);
  const dispatch = useAppDispatch();

  const onCityClick = (city: City) => dispatch(changeCity(city));

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => (
          <li
            className="locations__item"
            key={city.name}
          >
            <button
              className={cn(
                'locations__item-link',
                'tabs__item',
                'border-solid',
                {'tabs__item--active': city.name === activeCity.name}
              )}
              onClick={() => onCityClick(city)}
            >
              <span>{city.name}</span>
            </button>
          </li>
        ))
      }
    </ul>
  );
}

export default CitiesList;
