import { NameSpace } from '../../constants';
import { State } from '../../types/state';

export const getSortMenuStatus = (state: State): boolean => state[NameSpace.Sort].isSortMenuOpened;
export const getActiveSortOption = (state: State): string => state[NameSpace.Sort].activeSortOption;
