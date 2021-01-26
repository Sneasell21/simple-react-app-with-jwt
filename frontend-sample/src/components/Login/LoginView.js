import React, { useState } from 'react';
import { useIsAuthenticated,useSignIn } from 'react-auth-kit';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

import PropTypes from 'prop-types';
import * as s from './LoginView.styles'



 const loginUser = (credentials) => {
  return axios.post('http://localhost:8080/login',{
    username:credentials.username,
    password:credentials.password
  })
 };


const LoginView = () => {

  const signIn = useSignIn();
  const history = useHistory();
  const isAuthenticated = useIsAuthenticated();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();


    const res = await loginUser({
      username,
      password
    });
    if (res.status === 200){
      console.log(res.data);
      if (signIn({
        token:res.data.token,
        expiresIn:res.data.expiresIn,
        tokenType: "Bearer",
        authState: res.data.auth
      })){
        console.log("qwertyu");
        history.push('/dashboard');
      }
      else {
        // Else, there must be some error. So, throw an error
        console.log("Error Occoured. Try Again") ;
    }
  }

  }

  if (isAuthenticated()) {
    // If authenticated user, then redirect to secure dashboard
    return (      
        <Redirect to={'/dashboard'} />
    )
} else {
   
    return (<s.LoginViewContainer>
  <h1>Please Log In</h1>
      <form >
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </s.LoginViewContainer>)
}

}
export default LoginView;