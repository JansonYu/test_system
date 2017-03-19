
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import util from '../../common/util';

import Home from '../../components/home/Index';
import Query from '../../components/home/Query';
import AddPaper from '../../components/common/AddPaper';
import styles from '../../styles/less/home.less';
import {Button} from 'antd';
import { GET_DATA_REQUESTED } from '../../constants/home'


class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  componentDidMount(){

  }

  search() {
    const { dispatch } = this.props;
    // dispatch({type: GET_DATA_REQUESTED})
  }
  render() {
    return (
     <div className={styles.root}>
        <div className={styles.header}>
            <h1>所有试卷列表</h1>
        </div>
        <div style={{position:'absolute',right: 40, top:15}}>
          <AddPaper />
        </div>
        <div className={styles.querys}>
            <Query {...this.props}/>
        </div>
        {this.props.children || <Home {...this.props}/>}
      </div>
    );
  }
}
AppComponent.defaultProps = {
};
const getHome = (state) => {
  return state.home;
}
const selectors = createSelector(
  [getHome],
  (home) => {
    return {...home};
  }
)

export default connect(selectors)(AppComponent);
