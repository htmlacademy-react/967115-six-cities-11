import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatuses} from '../../constants';
import {useAppSelector} from '../../hooks/index';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps) {
  const {children} = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatuses.Auth
      ? children
      : <Navigate to={AppRoutes.Login} />

  );
}

export default PrivateRoute;
