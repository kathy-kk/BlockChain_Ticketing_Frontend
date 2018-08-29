import { LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR } from './ActionTypes';

const initState = { idToken: null };

export default function authReducer(state = initState, action) {
    switch (action.type) {
    case LOGIN_SUCCESS:
        return {
            idToken: action.token,
        };
    case LOGIN_ERROR:
        return {
            ...state,
            loginError: true
        };
    case LOGOUT:
        return initState;
    default:
        return state;
    }
}