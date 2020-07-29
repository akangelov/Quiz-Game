import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Auth from "./services/Auth";



ReactDOM.render(
  <BrowserRouter>
    <Auth>
        <App />      
    </Auth>
    </BrowserRouter>,
  document.getElementById('root')
);


