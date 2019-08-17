import React from 'react';
import {Layout,Navigation,Drawer,Header,Content} from 'react-mdl';
import './App.css';

function App() {
  return (
<div style={{height: '650px', position: 'relative'}}>
    <Layout fixedHeader style={{background: ''}}>
        <Header transparent className="nav-colour" title={<span><span style={{ color: '#ffffff' }}> <b>Parcial</b> </span></span>}>
            <Navigation>
                <a href="#">Home</a>
                <a href="#">Productos</a>
                <a href="#">Mi Carrito</a>
                <a href="#">Transacciones</a>
                <a href="#">Chat</a>
            </Navigation>
        </Header>
        <Drawer title="Parcial">
            <Navigation>
                <a href="#">Home</a>
                <a href="#">Productos</a>
                <a href="#">Mi Carrito</a>
                <a href="#">Transacciones</a>
                <a href="#">Chat</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
  );
}

export default App;
