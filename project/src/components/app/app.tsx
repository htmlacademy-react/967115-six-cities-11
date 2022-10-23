import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  amsterdamPlacesCount: number;
}

function App({amsterdamPlacesCount}: AppScreenProps): JSX.Element {
  return <MainScreen amsterdamPlacesCount={amsterdamPlacesCount} />;
}

export default App;
