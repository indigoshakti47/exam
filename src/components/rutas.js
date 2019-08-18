import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Productos from './productos';
import Home from './home';
import Perfil from './perfil';

const Main = () => (
    <Switch>
        
        <Route exact path="/productos" component={Productos}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/perfil" component={Perfil}/>
    </Switch>

)
export default Main;