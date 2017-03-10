import { handleActions } from 'redux-actions';
import { LOGIN_SUCCEEDED, LOGIN_FAILED }  from '../constants/login';

export default handleActions({
    [LOGIN_SUCCEEDED](state, action) {
        return state;
    },
    [LOGIN_FAILED](state, action) {
        alert(action.message);
        return state;
    }
}, {

}
)