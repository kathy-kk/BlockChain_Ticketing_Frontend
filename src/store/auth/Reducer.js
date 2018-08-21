import { LOGIN_SUCCESS, LOGOUT } from './ActionTypes';

const initState = { idToken: null };

export default function authReducer(state = initState, action) {
    switch (action.type) {
    case LOGIN_SUCCESS:
        return {
            idToken: action.token
        };
    case LOGOUT:
        return initState;
    default:
        return state;
    }
}