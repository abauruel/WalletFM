import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';

import ClientRegister from '../pages/Client/Register';
import ClientProfile from '../pages/Client/Profile';
import Category from '../pages/Category';
import CategoryRegister from '../pages/Category/Register';
import ProductRegister from '../pages/Product/Register';
import Broker from '../pages/Broker';
import BrokerRegister from '../pages/Broker/Register';
import InvestmentRegister from '../pages/Investment/add';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/clientRegister" exact component={ClientRegister} />
    <Route path="/client/:id" component={ClientProfile} />
    <Route path="/category" component={Category} />
    <Route path="/categoryRegister" component={CategoryRegister} />
    <Route path="/product" component={ProductRegister} />
    <Route path="/broker" component={Broker} />
    <Route path="/brokerRegister" component={BrokerRegister} />
    <Route path="/InvestmentRegister" component={InvestmentRegister} />
  </Switch>
);

export default Routes;
