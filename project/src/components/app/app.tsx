import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoutes, AuthorizationStatuses} from '../../constants';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import PlaceScreen from '../../pages/place-screen/place-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFound404Screen from '../../pages/not-found-404-screen/not-found-404-screen';
import {Offer} from '../../types/offer';
import {useAppDispatch} from '../../hooks/index';
import {loadOffers} from '../../store/actions';


type AppScreenProps = {
  offers: Offer[];
}

function App({offers}: AppScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(loadOffers());

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<MainScreen/>}
        />
        <Route
          path={AppRoutes.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatuses.Auth}
            >
              <FavoritesScreen offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoutes.Offer}/:id`}
          element={<PlaceScreen offers={offers} />}
        />
        <Route
          path={AppRoutes.NotFound}
          element={<NotFound404Screen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
