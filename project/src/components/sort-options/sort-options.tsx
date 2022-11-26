import {SORT_OPTIONS} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import { displaySortMenu, changeSortOption } from '../../store/actions';
import cn from 'classnames';

function SortOptions (): JSX.Element {
  const isSortMenuOpened = useAppSelector((state) => state.isSortMenuOpened);
  const activeSortOption = useAppSelector((state) => state.activeSortOption);

  const dispatch = useAppDispatch();

  const onSortMenuClick = () => {
    dispatch(displaySortMenu());
  };

  const onSortOptionClick = (option: string) => {
    dispatch(changeSortOption(option));
    dispatch(displaySortMenu());
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={onSortMenuClick}
      >
        {activeSortOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={cn(
          'places__options',
          'places__options--custom',
          {'places__options--opened': isSortMenuOpened}
        )}
      >
        {
          SORT_OPTIONS.map((option) => (
            <li
              className="places__option "
              tabIndex={0}
              key={option}
              onClick={() => onSortOptionClick(option)}
            >
              {option}
            </li>
          ))
        }
        {/* places__option--active */}
      </ul>
    </form>
  );
}

export default SortOptions;
