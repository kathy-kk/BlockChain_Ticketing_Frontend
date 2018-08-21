import { CHECK_AUTHORIZATION, LOGIN_REQUEST, LOGOUT, LOGIN_SUCCESS } from './ActionTypes'; 
import { getToken, clearToken } from '../../helper/utility';

export const checkAuthorization = () => {
    return (dispatch, getState) => {
        const token = getToken().get('idToken');
        if(token) dispatch({
            type: LOGIN_SUCCESS,
            token,
        });
    };
   
};
