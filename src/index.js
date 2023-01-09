import React from 'react';
import 'styles/index.scss';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import * as serviceWorker from './serviceWorker';

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();