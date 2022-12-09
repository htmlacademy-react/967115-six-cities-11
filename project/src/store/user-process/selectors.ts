import { NameSpace } from '../../constants';
import { State } from '../../types/state';
import { AuthorizationStatuses } from '../../constants';

export const getAuthorizationStatus = (state: State): AuthorizationStatuses => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatuses.Unknown;
