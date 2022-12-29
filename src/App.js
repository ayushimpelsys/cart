import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';

import Home from "./Home";
// import Error from "./Error"
import Menu from './Menu'
import Cart from "./Cart";
import Table from "./form";
import Custom from "./Custom";
// import navbar from "./components/navbar";

import { CartProvider } from "react-use-cart";

// import Menu from "./components/navbar";


function App() {
  return (
  
    
    
    <> 
      
      <CartProvider>
        
        <Menu/>
        <Switch>
          
          <Route path="/Table" component={Table} />
          
          <Route path="/Home" component={Home}/>
          <Route path="/Cart" component={Cart}/>
          
          <Route path="/Custom" component={Custom}/>
          
          
        <Home />
        <Cart />
        <Table />
        
        </Switch>
      </CartProvider>
    </>
  );
}

export default App;
