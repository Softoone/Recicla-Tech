import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

<<<<<<< HEAD

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
=======
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
         <App />
    </BrowserRouter>
    , document.getElementById('root')
>>>>>>> feature/transportadora
);

