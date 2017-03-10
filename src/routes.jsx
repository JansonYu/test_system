import React from 'react';
import ReactDom from 'react-dom';

import {getJSON} from './common/dataService';
import global from './common/global';
import util from './common/util';
import URLS from './constants/URLS';

//main
import Main from './containers/Main';
//login
import Login from './containers/login/login';
//home
import Home from './containers/home/home';


const routes = [{
  path: '/login',
  component: Login
},{
  path: '/',
  component: Main,
  indexRoute: {component: Home},
  childRoutes: [
    {
      path: 'home',
      component: Home
    }
  ]
}];

export default routes;
