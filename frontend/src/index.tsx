//Importação das bibliotecas e componentes principais
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';


ReactDOM.render( //Renderização dos componentes no index.html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
