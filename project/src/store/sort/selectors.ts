import { NameSpace } from '../../constants';
import { State } from '../../types/state';

export const selectSortMenuStatus = (state: State): boolean => state[NameSpace.Sort].isSortMenuOpened;
export const selectActiveSortOption = (state: State): string => state[NameSpace.Sort].activeSortOption;
