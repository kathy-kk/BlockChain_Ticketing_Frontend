import {  LOGIN_REQUEST, LOGOUT, LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from './ActionTypes'; 
import { getToken, clearToken } from '../../helper/utility';
import signin from '../../service/signin';
import register from '../../service/register';
import { validateEmail, signUpFieldValidate } from '../../helper/utility';

export const fireRegister = (first_name, last_name, emailId, password, passwordConfirm) => {
    return (dispatch, getState) => {

        const error = signUpFieldValidate({first_name, last_name, emailId, password}).error;
        if(error&& error.message&& error.message.includes('first_name')){
            dispatch({ 
                type: SIGNUP_ERROR,
                errorHint : 'page.signUpFirstNameError' });
            return ;
        }
        if(error&& error.message&& error.message.includes('last_name')){
            dispatch({ 
                type: SIGNUP_ERROR,
                errorHint : 'page.signUpLastNameError' });
            return ;
        }
        if(!validateEmail(emailId)){
            dispatch({ 
                type: SIGNUP_ERROR,
                errorHint : 'page.signUpEmailError' });
            return ;    
        }
        if(error&& error.message&& error.message.includes('password')){
            dispatch({ 
                type: SIGNUP_ERROR,
                errorHint : 'page.signUpPasswordError'});
            return ;
        }
        if(password.trim() != passwordConfirm.trim()){
            dispatch({
                type: SIGNUP_ERROR,
                errorHint : 'page.signUpPasswordConfirmError'});
            return ;    
        }
        dispatch(createAccount(first_name, last_name, emailId, password));

    };
};
export const createAccount = (first_name, last_name, emailId, password) => {
    return async (dispatch, getState) => {
        dispatch({
            type: SIGNUP_REQUEST
        });
        try{
            const registerResponse = await register(first_name, last_name, emailId, password);
            console.log(registerResponse);
            const token = registerResponse.data.accessToken;
            localStorage.setItem('id_token',token);
            dispatch({
                type: LOGIN_SUCCESS,
                token,
            });
        }catch(error){
            if(error.message == '409') 
                dispatch({
                    type: SIGNUP_ERROR,
                    errorHint: 'page.signUpUserExistError'
                });
            console.error(error);
        }
    };
};
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
            if(error.message == '400'){ dispatch({
                type: LOGIN_ERROR,
            }); }
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
