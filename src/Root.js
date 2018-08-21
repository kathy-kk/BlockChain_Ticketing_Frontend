import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
//import { store, history } from './ConfigureStore';
import  PublicRouter from './Router';
import App from './screen/App';


const Root = ({ store, history }) => {
    return <Provider store = {store}>
        <PublicRouter history = {history}>
            <App />
        </PublicRouter>
    </Provider>;
};

Root.propTypes = {
    store: PropTypes.object.isRequired
};
export default Root;