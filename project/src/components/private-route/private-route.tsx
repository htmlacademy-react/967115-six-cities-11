import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatuses} from '../../constants';
import {useAppSelector} from '../../hooks/index';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps) {
  const {children} = props;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatuses.Auth
      ? children
      : <Navigate to={AppRoutes.Login} />

  );
}

export default PrivateRoute;
