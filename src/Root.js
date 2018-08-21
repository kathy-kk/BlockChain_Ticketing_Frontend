import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import  PublicRouter from './Router';

const Root = ({ store, history }) => {
    return <Provider store = {store}>
        <PublicRouter history = {history}>
        </PublicRouter>
    </Provider>;
};



Root.propTypes = {
    store: PropTypes.object.isRequired
};
export default Root;