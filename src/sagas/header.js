import { takeEvery, isCancelError } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { getJSON } from '../common/dataService';
import { hashHistory } from 'react-router';

import { USER_INFO_REQUESTED, USER_INFO_SUCCEEDED, USER_INFO_FAILED
        ,LOGOUT_REQUESTED, LOGOUT_SUCCEEDED, LOGOUT_FAILED } from '../constants/header'
import URLS from '../constants/URLS';
import global from '../common/global';

function* fetchUserInfoData(action) {
    try{
        //显示全局loading
        let data = yield call(getJSON, URLS.GET_USER_INFO);
        const { userAccount } = data.resultMessage;
        yield put({type: USER_INFO_SUCCEEDED, userAccount})
    } catch(e) {
        yield put({type: USER_INFO_FAILED, message: e});
    }
}

function* fetchUserInfoDataSaga() {
    yield* takeEvery(USER_INFO_REQUESTED, fetchUserInfoData)
}

function* logout(action) {
    try {
        let data = yield call(getJSON, URLS.LOGOUT_URL);
        yield put({type: LOGOUT_SUCCEEDED});
        yield hashHistory.push('/login');
    } catch(e) {
        yield put({type: LOGOUT_FAILED})
    }
}

function* logoutSaga() {
    yield* takeEvery(LOGOUT_REQUESTED, logout);
}

export {
    fetchUserInfoDataSaga,
    logoutSaga
};
