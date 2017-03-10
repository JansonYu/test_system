import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Header from '../../components/header/Index';

const getHeader = (state) => {
  return state.header ;
};

const selectors = createSelector(
  [getHeader],
  (header) => {
    return  {...header} ;
  }
)

export default connect(selectors)(Header);

