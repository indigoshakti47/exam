import React from 'react';
import Product from './Category/Products_list/Product/Product';
import Profile from './Category/Profile/profile';
import Carousel from './Category/Landing/carousel';


import {Switch, Route} from 'react-router-dom';


const Main = () => (
    <Switch>

        <Route exact path="/product" component={Product}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/carousel" component={Carousel}/>
    </Switch>

)
export default Main;