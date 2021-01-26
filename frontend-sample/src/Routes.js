import React from 'react';
import {Switch, Route } from 'react-router-dom';
import { PrivateRoute } from 'react-auth-kit';

// Components

import Home from './components/MainView/Home/Home';
import About from './components/MainView/About/About';

const NavBarRoutes = () => {
  return (
    <div>
     <PrivateRoute exact path='/dashboard/' component={Home} loginPath={'/login'}  />
     <PrivateRoute exact path='/dashboard/about' component={About} loginPath={'/login'}  />
     </div>
  )
}

export default NavBarRoutes;