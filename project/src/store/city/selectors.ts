import { NameSpace } from '../../constants';
import { City } from '../../types/city';
import { State } from '../../types/state';

export const getCity = (state: State): City => state[NameSpace.Cities].city;
