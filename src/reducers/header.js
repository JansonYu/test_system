import React from 'react';
import { handleActions } from 'redux-actions';
import {  USER_INFO_SUCCEEDED, USER_INFO_FAILED } from '../constants/header'



export default handleActions({
        [USER_INFO_SUCCEEDED](state, action) {
            const { userAccount } = action;
            return {...state, userAccount}
        },
        [USER_INFO_FAILED](state, action) {
            alert(action.message);
            return state;
        }
    },{
        userAccount: ''
    }
)
