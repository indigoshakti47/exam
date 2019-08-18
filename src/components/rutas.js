import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Productos from './productos';
import Carousel from './carousel';
import Home from './home';

const Main = () => (
    <Switch>

        <Route exact path="/productos" component={Productos}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/carousel" component={Carousel}/>
    </Switch>

)
export default Main;