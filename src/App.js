import React from 'react';
import {Layout,Navigation,Drawer,Header,Content} from 'react-mdl';
import './App.css';
import {Link} from 'react-router-dom';
import Main from './components/rutas';

function App() {
  return (
<div style={{height: '100%'}}>
    <Layout fixedHeader  style={{background: ''}}>
        <Header fixedHeader transparent className="nav-colour" title={<span><span style={{ color: '#ffffff' }}> <b>Parcial</b> </span></span>}>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/carousel">Carousel</Link>
            </Navigation>
        </Header>
        <Drawer title="Parcial">
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/carousel">Carousel</Link>
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
