import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>CMU Student Government</title>
      <link rel="canonical" href="" />
      <link rel="shortcut icon" href="/cmu_logo.jpeg" type="image/jpeg" />
    </Helmet>
    <App />
  </React.StrictMode>
);

reportWebVitals();

