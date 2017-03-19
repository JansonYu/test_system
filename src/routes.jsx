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

import Home from './containers/home/home';
import Upload from './containers/home/home';
import Paper from './containers/paper/paper';
import Chart from './containers/chart/chart';


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
      component: Home,
      childRoutes:[]
    },{
      path: '/paper',
      component: Paper
    },{
      path: '/chart',
      component: Chart
    }
  ]
}];

export default routes;
