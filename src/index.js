import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Carousel from './components/carousel';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
 <BrowserRouter>
 <App />
 <Carousel />
 </BrowserRouter>  
  
, document.getElementById('root'));


serviceWorker.unregister();
