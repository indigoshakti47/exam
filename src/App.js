import React from 'react';
import {Layout,Navigation,Drawer,Header,Content} from 'react-mdl';
import './App.css';
import {Link} from 'react-router-dom';
import Main from './components/rutas';

function App() {
  return (
<div style={{height: '100%'}}>
    <Layout fixedHeader  style={{background: ''}}>
        <Header fixedHeader transparent className="nav-colour" title={<span><span style={{ color: '#ffffff' }}> <b>Κοῖος</b> </span></span>}>
            <Navigation>
                <Link to='/carousel'>Home</Link>
                <Link to="/productos">Products</Link>
                <Link to="/">Shopping Cart</Link>
                <Link to=''>My profile</Link>
                <Link to="/home">Chat room</Link>


            </Navigation>
        </Header>
        <Drawer title="Parcial">
            <Navigation>
                <Link to='/carousel'>Home</Link>
                <Link to="/productos">Products</Link>
                <Link to="/carousel">Shopping Cart</Link>
                <Link to=''>My profile</Link>
                <Link to="/home">Chat room</Link>
            </Navigation>
        </Drawer>
        <Content>
        <div className="page-content"/>
            <Main/>
        </Content>
        <Content />
    </Layout>
</div>


  );
}

export default App;

