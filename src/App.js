import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Products from "./Component/Products/Products";
import { Switch, Route} from 'react-router-dom';
import Product from './Component/Product/Product';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Login from "./Component/Login/Login";
import Register from './Component/Register/Register';

// import Cart from './Component/Cart/Cart';

function App() {
  return (
    <>
          <Navbar/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/products/:id" component={Product} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} /> 
              <Route exact path="/register" component={Register} />
              
          </Switch>
          <Footer/>
    </>

  );
}

export default App

