import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';

const Setting = {
  PlacesCount: 45
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesCount={Setting.PlacesCount}
        offers={offers}
      />
    </Provider>
  </React.StrictMode>,
);
