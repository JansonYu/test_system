import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Paper from '../../components/paper/Index';

const getPaper = (state) => {
  return state.paper ;
};

const selectors = createSelector(
  [getPaper],
  (paper) => {
    return  {...paper} ;
  }
)

export default connect(selectors)(Paper);
