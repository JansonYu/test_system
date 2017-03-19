import React from 'react';
import { handleActions } from 'redux-actions';

import CONSTANTS from '../constants/home';
// import { GET_DATA_SUCCEEDED, GET_DATA_FAILED, SHOW_TABLE_LOADING } from '../constants/home';

export default handleActions({
        //college
        [CONSTANTS.GET_COLLEGE_SUCCEEDED](state, action) {
          return {...state, collegeData: action.collegeData}
        },
        [CONSTANTS.GET_COLLEGE_FAILED](state, action) {
          alert(action.message);
          return state;
        },
        //fitst
        [CONSTANTS.GET_FIRST_PROJECT_SUCCEEDED](state, action) {
          return {...state, firstProjectData: action.firstProjectData}
        },
        [CONSTANTS.GET_FIRST_PROJECT_FAILED](state, action) {
          alert(action.message);
          return state;
        },
        //second
        [CONSTANTS.GET_SECOND_PROJECT_SUCCEEDED](state, action) {
          return {...state, secondProjectData: action.secondProjectData}
        },
        [CONSTANTS.GET_SECOND_PROJECT_FAILED](state, action) {
          alert(action.message);
          return state;
        },
        //subject
        [CONSTANTS.GET_SUBJECT_SUCCEEDED](state, action) {
          return {...state, subjectData: action.subjectData}
        },
        [CONSTANTS.GET_SUBJECT_FAILED](state, action) {
          alert(action.message);
          return state;
        },
        //paperList
        [CONSTANTS.GET_PAPER_LIST_SUCCEEDED](state, action) {
          return {...state, paperListData: action.paperListData, queryListParams:action.queryListParams}
        },
        [CONSTANTS.GET_PAPER_LIST_FAILED](state, action) {
          alert(action.message);
          return state;
        },
        //delete
        [CONSTANTS.GET_PAPER_DELETE_SUCCEEDED](state, action) {
          return {...state}
        },
        [CONSTANTS.GET_PAPER_DELETE_FAILED](state, action) {
          alert(action.message);
          return state;
        },
        //
        [CONSTANTS.GET_PAPER_ONLINE_SUCCEEDED](state, action) {
          return {...state}
        },
        [CONSTANTS.GET_PAPER_ONLINE_FAILED](state, action) {
          alert(action.message);
          return state;
        },
        //
        [CONSTANTS.GET_PAPER_OFFLINE_SUCCEEDED](state, action) {
          return {...state}
        },
        [CONSTANTS.GET_PAPER_OFFLINE_FAILED](state, action) {
          alert(action.message);
          return state;
        },
        //
        [CONSTANTS.GET_PAPER_CLOSE_SUCCEEDED](state, action) {
          return {...state}
        },
        [CONSTANTS.GET_PAPER_CLOSE_FAILED](state, action) {
          alert(action.message);
          return state;
        },
        //
        [CONSTANTS.GET_PAPER_LINK_INFO_SUCCEEDED](state, action) {
          return {...state, linkInfoData: action.linkInfoData}
        },
        [CONSTANTS.GET_PAPER_LINK_INFO_FAILED](state, action) {
          alert(action.message);
          return state;
        },
    },
    {
        collegeData:[],
        firstProjectData:[],
        secondProjectData:[],
        subjectData:[],
        queryListParams:{},
        paperListData:{
          total:'',
          rows:[]
        },
        linkInfoData:{}
    }
)
