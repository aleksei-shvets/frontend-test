import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import Init from './Init';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Init>
    <App />
  </Init>,
);
