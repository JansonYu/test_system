import { takeEvery, isCancelError } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { getJSON } from '../common/dataService';
import URLS from '../constants/URLS';
import { hashHistory } from 'react-router';

import { LOGIN_REQUESTED, LOGIN_SUCCEEDED, LOGIN_FAILED }  from '../constants/login';

function* login(action) {
    try {
        const { params } = action;
        const username = action.params.j_username;
        const password = action.params.j_password;
        const data = yield call(getJSON, URLS.LOGIN_URL, params);
        //登录成功，不需要任何数据
        yield put({type: LOGIN_SUCCEEDED});
        yield call(getJSON, URLS.LOGIN_AUTHEN_URL, {username,password});
        yield hashHistory.push('/legion');
        console.log('登录成功！跳转');
    } catch(e) {
        yield put({type: LOGIN_FAILED, message: e});
    }
}

function* loginSaga() {
    yield takeEvery(LOGIN_REQUESTED, login);
}

export {
    loginSaga
}
