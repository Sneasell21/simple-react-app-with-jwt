import React , {Component,useState} from 'react';
import * as s from './App.styles';
import {Switch, Route } from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';
// components
import DashboardView from './components/Dashboard/DashboardView';
import LoginView from './components/Login/LoginView';
import { PrivateRoute } from 'react-auth-kit';


function App() {
 
 return (
<s.App>
<AuthProvider
authStorageType="cookie" 
authStorageName="_auth_t" 
authTimeStorageName="_auth_time" 
stateStorageName="_auth_state" 
cookieDomain={window.location.hostname} 
cookieSecure={window.location.protocol === "https:"}>
    
<Switch>
    <Route exact path="/" component = {LoginView} />
    <Route exact path="/login" component = {LoginView} />
    <PrivateRoute path="/dashboard" component={DashboardView} loginPath={'/login'} />
</Switch>
</AuthProvider>
</s.App>
 )
}

export default App;