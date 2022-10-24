import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import PlaceScreen from '../../pages/place-screen/place-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFound404Screen from '../../pages/not-found-404-screen/not-found-404-screen';


type AppScreenProps = {
  placesCount: number;
}

function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainScreen placesCount={placesCount}/>}
        />
      </Routes>
      <Routes>
        <Route
          path='login'
          element={<LoginScreen />}
        />
        <Route
          path='favorites'
          element={<FavoritesScreen />}
        />
        <Route
          path='offer/:id'
          element={<PlaceScreen />}
        />
        <Route
          path='*'
          element={<NotFound404Screen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
