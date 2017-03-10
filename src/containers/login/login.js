import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Login from '../../components/login/Login';

const getState = (state) => {
  return state ;
};

const selectors = createSelector(
  [getState],
  (state) => {
    return  {...state} ;
  }
)

export default connect(selectors)(Login);


