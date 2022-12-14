import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatuses} from '../../constants';
import {useAppSelector} from '../../hooks/index';
import {selectAuthorizationStatus, selectAuthCheckedStatus} from '../../store/user/selectors';
import LoadingOffers from '../loading-offers/loading-offers';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps) {
  const {children} = props;
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const authCheckedStatus = useAppSelector(selectAuthCheckedStatus);


  return (
    !authCheckedStatus
      ? <LoadingOffers/>
      : (authorizationStatus === AuthorizationStatuses.Auth && children) || <Navigate to={AppRoutes.Login} />
  );
}

export default PrivateRoute;
