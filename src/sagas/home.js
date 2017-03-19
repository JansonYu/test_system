import { takeEvery, isCancelError } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { getJSON } from '../common/dataService';

import CONSTANTS from '../constants/home';
// import { GET_DATA_REQUESTED, GET_DATA_SUCCEEDED, GET_DATA_FAILED, SHOW_TABLE_LOADING } from '../constants/home';
import { SHOW_GLOBAL_LOADING, HIDE_GLOBAL_LOADING } from '../constants/globalLoading';

import URLS from '../constants/URLS';

//college
function* fetchCollegeData(action) {
    try {
      const data = yield call(getJSON, URLS.HOME_GET_COLLEGE_URL);
      yield put({type: CONSTANTS.GET_COLLEGE_SUCCEEDED, collegeData:data.dataList });
    } catch (e) {
      yield put({type: CONSTANTS.GET_COLLEGE_FAILED, message: e});
    }
}
function* fetchCollegeDataSaga() {
    yield* takeEvery( CONSTANTS.GET_COLLEGE_REQUESTED, fetchCollegeData );
}

//first
function* fetchFirstProjectData(action) {
    try {
      const { queryParams } = action;
      const data = yield call(getJSON, URLS.HOME_GET_FIRST_URL, queryParams);
      yield put({type: CONSTANTS.GET_FIRST_PROJECT_SUCCEEDED, firstProjectData:data.dataList });
    } catch (e) {
      yield put({type: CONSTANTS.GET_FIRST_PROJECT_FAILED, message: e});
    }
}
function* fetchFirstProjectDataSaga() {
    yield* takeEvery( CONSTANTS.GET_FIRST_PROJECT_REQUESTED, fetchFirstProjectData );
}

//second
function* fetchSecondProjectData(action) {
    try {
      const { queryParams } = action;
      const data = yield call(getJSON, URLS.HOME_GET_SECOND_URL, queryParams);
      yield put({type: CONSTANTS.GET_SECOND_PROJECT_SUCCEEDED, secondProjectData:data.dataList });
    } catch (e) {
      yield put({type: CONSTANTS.GET_SECOND_PROJECT_FAILED, message: e});
    }
}
function* fetchSecondProjectDataSaga() {
    yield* takeEvery( CONSTANTS.GET_SECOND_PROJECT_REQUESTED, fetchSecondProjectData );
}

//subject
function* fetchSubjectData(action) {
    try {
      const { queryParams } = action;
      const data = yield call(getJSON, URLS.HOME_GET_SUBJECT_URL, queryParams);
      yield put({type: CONSTANTS.GET_SUBJECT_SUCCEEDED, subjectData:data.dataList });
    } catch (e) {
      yield put({type: CONSTANTS.GET_SUBJECT_FAILED, message: e});
    }
}
function* fetchSubjectDataSaga() {
    yield* takeEvery( CONSTANTS.GET_SUBJECT_REQUESTED, fetchSubjectData );
}

//试卷列表
function* fetchPaperListData(action) {
    // yield put({type: CONSTANTS.SHOW_TABLE_LOADING})
    // yield put({type: SHOW_GLOBAL_LOADING})
    try {
      const { queryListParams } = action;
      const data = yield call(getJSON, URLS.GET_PAPER_LIST_URL, queryListParams);
      yield put({type: CONSTANTS.GET_PAPER_LIST_SUCCEEDED, paperListData:data,queryListParams });
      // yield put({type: HIDE_GLOBAL_LOADING})
    } catch (e) {
      yield put({type: CONSTANTS.GET_PAPER_LIST_FAILED, message: e});
      // yield put({type: HIDE_GLOBAL_LOADING})
    }
}
function* fetchPaperListDataSaga() {
    yield* takeEvery( CONSTANTS.GET_PAPER_LIST_REQUESTED, fetchPaperListData );
}

//delete
function* fetchPaperDeleteData(action) {
    try {
      const { queryParams } = action;
      const data = yield call(getJSON, URLS.DELETE_URL, queryParams);
      yield put({type: CONSTANTS.GET_PAPER_DELETE_SUCCEEDED });
    } catch (e) {
      yield put({type: CONSTANTS.GET_PAPER_DELETE_FAILED, message: e});
    }
}
function* fetchPaperDeleteDataSaga() {
    yield* takeEvery( CONSTANTS.GET_PAPER_DELETE_REQUESTED, fetchPaperDeleteData );
}
//online
function* fetchPaperOnlineData(action) {
    try {
      const { queryParams } = action;
      const data = yield call(getJSON, URLS.ONLINE_URL, queryParams);
      yield put({type: CONSTANTS.GET_PAPER_ONLINE_SUCCEEDED });
    } catch (e) {
      yield put({type: CONSTANTS.GET_PAPER_ONLINE_FAILED, message: e});
    }
}
function* fetchPaperOnlineDataSaga() {
    yield* takeEvery( CONSTANTS.GET_PAPER_ONLINE_REQUESTED, fetchPaperOnlineData );
}
//offline
function* fetchPaperOfflineData(action) {
    try {
      const { queryParams } = action;
      const data = yield call(getJSON, URLS.OFFLINE_URL, queryParams);
      yield put({type: CONSTANTS.GET_PAPER_OFFLINE_SUCCEEDED });
    } catch (e) {
      yield put({type: CONSTANTS.GET_PAPER_OFFLINE_FAILED, message: e});
    }
}
function* fetchPaperOfflineDataSaga() {
    yield* takeEvery( CONSTANTS.GET_PAPER_OFFLINE_REQUESTED, fetchPaperOfflineData );
}
//close
function* fetchPaperCloseData(action) {
    try {
      const { queryParams } = action;
      const data = yield call(getJSON, URLS.CLOSE_URL, queryParams);
      yield put({type: CONSTANTS.GET_PAPER_CLOSE_SUCCEEDED });
    } catch (e) {
      yield put({type: CONSTANTS.GET_PAPER_CLOSE_FAILED, message: e});
    }
}
function* fetchPaperCloseDataSaga() {
    yield* takeEvery( CONSTANTS.GET_PAPER_CLOSE_REQUESTED, fetchPaperCloseData );
}
//info
function* fetchPaperLinkInfoData(action) {
    try {
      const { queryParams } = action;
      const data = yield call(getJSON, URLS.SHOW_LINK_INFO_URL, queryParams);
      yield put({type: CONSTANTS.GET_PAPER_LINK_INFO_SUCCEEDED, linkInfoData:data});
    } catch (e) {
      yield put({type: CONSTANTS.GET_PAPER_LINK_INFO_FAILED, message: e});
    }
}
function* fetchPaperLinkInfoDataSaga() {
    yield* takeEvery( CONSTANTS.GET_PAPER_LINK_INFO_REQUESTED, fetchPaperLinkInfoData );
}

export {
    fetchCollegeDataSaga,
    fetchFirstProjectDataSaga,
    fetchSecondProjectDataSaga,
    fetchSubjectDataSaga,
    fetchPaperListDataSaga,
    fetchPaperDeleteDataSaga,
    fetchPaperOnlineDataSaga,
    fetchPaperOfflineDataSaga,
    fetchPaperCloseDataSaga,
    fetchPaperLinkInfoDataSaga
};
