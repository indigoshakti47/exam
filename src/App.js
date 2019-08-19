import React from 'react';
import {Layout,Navigation,Drawer,Header,Content} from 'react-mdl';
import './App.css';
import Main from './components/rutas';
import Category from './components/Category/Category';
import {BrowserRouter, Route, Link} from 'react-router-dom';

function App() {

  var productsList = [
    {
        image : "https://barcelonastartupnews.com/wp-content/uploads/2017/10/Coding-Bootcamps-in-Barcelona-intensive-programming-courses-learn-software-development-and-start-a-career-in-tech.jpeg",
        tittle : "Support & IT"
    },
    {
        image : "https://barcelonastartupnews.com/wp-content/uploads/2017/10/Coding-Bootcamps-in-Barcelona-intensive-programming-courses-learn-software-development-and-start-a-career-in-tech.jpeg",
        tittle : "Web Design"
    },
    {
      image : "https://barcelonastartupnews.com/wp-content/uploads/2017/10/Coding-Bootcamps-in-Barcelona-intensive-programming-courses-learn-software-development-and-start-a-career-in-tech.jpeg",
      tittle : "Movil Development"
    },
    {
      image : "https://barcelonastartupnews.com/wp-content/uploads/2017/10/Coding-Bootcamps-in-Barcelona-intensive-programming-courses-learn-software-development-and-start-a-career-in-tech.jpeg",
      tittle : "Ecommerce"
    },
    {
      image : "https://barcelonastartupnews.com/wp-content/uploads/2017/10/Coding-Bootcamps-in-Barcelona-intensive-programming-courses-learn-software-development-and-start-a-career-in-tech.jpeg",
      tittle : "Chatbots"
    },
    {
      image : "https://barcelonastartupnews.com/wp-content/uploads/2017/10/Coding-Bootcamps-in-Barcelona-intensive-programming-courses-learn-software-development-and-start-a-career-in-tech.jpeg",
      tittle : "Game Development"
    },
  ];


  return (
    <BrowserRouter>
    <div style={{height: '100%'}}>
    <Layout fixedHeader  style={{background: ''}}>
        <Header fixedHeader transparent className="nav-colour" title={<span><span style={{ color: '#ffffff' }}> <b>Κοῖος</b> </span></span>}>
            <Navigation>
                <Link to="/carousel">Home</Link>
                <Link to= {`/products`} title="Products" >Products</Link>
                <Link to="/">Shopping cart</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/">Chat room</Link>


            </Navigation>
        </Header>
        <Drawer title="Κοῖος">
            <Navigation>
                <Link to="/carousel">Home</Link>
                <Link to="/product">Products</Link>
                <Link to="/">Shopping cart</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/">Chat room</Link>
            </Navigation>
        </Drawer>
        <Content>
        <div className="page-content"/>
            <Main/>
        </Content>

        <main>
                <Route path="/product" render={() => <Category name = "Programming & Tech" 
                                                        description = "Get all the technical bells and whistles without paying for a programming degree"
                                                        productsList = {productsList}
                                              />} 
                />              
              </main>

        <Content />
    </Layout>
</div>
    </BrowserRouter>
  );
}

export default App;
