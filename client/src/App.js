import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './views/Landing'
import Home from './views/Home'
import Create from './views/Create'
import Details from './views/Details'
import About from "./components/About";
import axios from "axios";
axios.defaults.baseURL ="https://dog-appi-production.up.railway.app/"

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Create' component={Create} />
        <Route exact path='/Details/:id' component={Details} />
        <Route exact path='/About' component={About} />
      </Switch>
    </BrowserRouter>
  );
}


