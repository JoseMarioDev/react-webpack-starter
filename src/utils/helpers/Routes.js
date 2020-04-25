import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../components/home/Home';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <Home />} />
  </BrowserRouter>
);

export default Routes;
