import { store } from '../store';
import { AuthorizationStatuses } from '../constants';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatuses;
}
