import {SORT_OPTIONS} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import { toggleSortMenu, changeSortOption } from '../../store/sort-process/sort-process';
import {getSortMenuStatus, getActiveSortOption} from '../../store/sort-process/selectors';
import cn from 'classnames';

function SortOptions (): JSX.Element {
  const isSortMenuOpened = useAppSelector(getSortMenuStatus);
  const activeSortOption = useAppSelector(getActiveSortOption);

  const dispatch = useAppDispatch();

  const onSortMenuClick = () => {
    dispatch(toggleSortMenu());
  };

  const onSortOptionClick = (option: string) => {
    dispatch(changeSortOption(option));
    dispatch(toggleSortMenu());
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
              className={cn(
                'places__option',
                {'places__option--active': option === activeSortOption}

              )}
              tabIndex={0}
              key={option}
              onClick={() => onSortOptionClick(option)}
            >
              {option}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default SortOptions;
