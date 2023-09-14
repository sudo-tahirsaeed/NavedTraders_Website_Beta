import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";



import './style.css'
import Home from './views/home'
import Productswithcat from './views/productwithcat1'
import About from './views/about'
import Contact from './views/contact'

import { DataProvider } from './views/data';


const App = () => {
  
  return (
    <Router>
    
    <DataProvider>
        <Switch>

          <Route exact path="/" component={Home}  />
          <Route exact path="/products" component={Productswithcat} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
 
        </Switch>
        </DataProvider>

    </Router>
  
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
