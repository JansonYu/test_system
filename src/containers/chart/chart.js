import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Chart from '../../components/chart/Index';

const getState = (state) => {
  return state ;
};

const selectors = createSelector(
  [getState],
  (state) => {
    return  {...state} ;
  }
)

export default connect(selectors)(Chart);
