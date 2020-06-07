import React from 'react';
//quero que o react integre com a DOM
import ReactDOM from 'react-dom';

import App from './App';

//Arquivo principal da nossa aplicacao
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


