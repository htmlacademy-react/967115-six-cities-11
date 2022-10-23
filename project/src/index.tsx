import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  AmsterdamPlacesCount: 45
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App amsterdamPlacesCount={Setting.AmsterdamPlacesCount}/>
  </React.StrictMode>,
);
