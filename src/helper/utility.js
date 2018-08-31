//import { Map } from 'immutable';
import Joi from 'joi';

export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function getValidateSchema() {
    return  {
        first_name: Joi.string().regex(/^[a-zA-Z ]+$/).trim().min(2).required(),
        last_name: Joi.string().regex(/^[a-zA-Z ]+$/).trim().min(2).required(),
        emailId: Joi.string().required(),
        password: Joi.string().required().min(5).trim(),
    };
}

export function signUpFieldValidate(field) {
    const result = Joi.validate(field, getValidateSchema());
    return result;
}

export function clearToken() {
    localStorage.removeItem('id_token');
}
  
export function getToken() {
    try {
        const idToken = localStorage.getItem('id_token');
        return idToken;
    } catch (err) {
        clearToken();
    }
}