import { NameSpace } from '../../constants';
import { State } from '../../types/state';
import { AuthorizationStatuses } from '../../constants';

export const selectAuthorizationStatus = (state: State): AuthorizationStatuses => state[NameSpace.User].authorizationStatus;
export const selectAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatuses.Unknown;
