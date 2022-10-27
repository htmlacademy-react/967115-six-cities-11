import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatuses} from '../../constants';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatuses;
  children: JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps) {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatuses.Auth
      ? children
      : <Navigate to={AppRoutes.Login} />

  );
}

export default PrivateRoute;
