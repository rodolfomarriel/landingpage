import React from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './landingPage';

require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);
