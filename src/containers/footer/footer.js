
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <footer style={{position: 'fixed',bottom: 0, color:'#999', backgroundColor: '#f5f5f5',lineHeight: '45px',fontSize:'12px', borderTop: '1px solid #D8D8D8',textAlign:'center',width:'100%'}}>
          Copyright © www.shangdejigou.com
      </footer>
    );
  }
}

export default Footer;
