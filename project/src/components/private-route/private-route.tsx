import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatuses} from '../../constants';
import {useAppSelector} from '../../hooks/index';
import {selectAuthorizationStatus} from '../../store/user/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps) {
  const {children} = props;
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatuses.Auth
      ? children
      : <Navigate to={AppRoutes.Login} />

  );
}

export default PrivateRoute;
