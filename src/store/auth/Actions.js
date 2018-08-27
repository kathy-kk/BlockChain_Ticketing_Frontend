import {  LOGIN_REQUEST, LOGOUT, LOGIN_SUCCESS } from './ActionTypes'; 
import { getToken, clearToken } from '../../helper/utility';
import signin from '../../service/signin';

export const login = (emailId, password) => {
    return async (dispatch, getState) => {
        dispatch({
            type: LOGIN_REQUEST
        });
        try{
            const loginResponse =  await signin(emailId, password);
            const token = loginResponse.data.accessToken;
            const userDetail = loginResponse.data.userDetail;
            localStorage.setItem('id_token',token);
            dispatch({
                type: LOGIN_SUCCESS,
                token,
                userDetail
            });
        }catch(error){
            if(error.message == '401'){ clearToken(); }
            console.error(error);
        }

    };
};

export const checkAuthorization = () => {
    return (dispatch, getState) => {
        const token = getToken();
        if(token) dispatch({
            type: LOGIN_SUCCESS,
            token,
        });
    };
   
};
