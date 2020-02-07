import React from 'react';
import {Route} from 'react-router-dom';
import Login from './login';

const LoginPage = ({match}) => (
  <div>
    <Route exact path={`${match.path}`} component={Login} />
    <Route path={`${match.path}/:Id`} component={Login} />
  </div>
);

export default LoginPage;
