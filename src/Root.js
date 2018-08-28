import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import  PublicRouter from './Router';
import { IntlProvider } from 'react-intl';
import { LocaleProvider } from 'antd';
import AppLocale from './locale/AppLocale';

const Root = ({ store, history }) => {
    const currentLocale = AppLocale.en;
    return <LocaleProvider locale={currentLocale.antd}>
        <IntlProvider
            locale={currentLocale.locale}
            messages={currentLocale.messages}
        >
            <Provider store = {store}>     
                <PublicRouter history = {history}/>
            </Provider>
        </IntlProvider>
    </LocaleProvider>;
};



Root.propTypes = {
    store: PropTypes.object.isRequired
};
export default Root;