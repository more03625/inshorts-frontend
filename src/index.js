import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import '../src/assets/vendor/simplebar/dist/simplebar.min.css';
import '../src/assets/vendor/tiny-slider/dist/tiny-slider.css';
import '../src/assets/vendor/lightgallery.js/dist/css/lightgallery.min.css';
import '../src/assets/css/theme.min.css'
import '../src/assets/css/custom.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
