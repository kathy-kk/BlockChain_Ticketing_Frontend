import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import  PublicRouter from './Router';
import { IntlProvider } from 'react-intl';
import { LocaleProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
import AppLocale from './locale/AppLocale';
import theme from './component/styles/theme';
import AppHolder from './screen/App/App.style';

const Root = ({ store, history }) => {
    const currentLocale = AppLocale.en;
    return <LocaleProvider locale={currentLocale.antd}>
        <IntlProvider
            locale={currentLocale.locale}
            messages={currentLocale.messages}
        >
            <ThemeProvider theme = {theme} >
                <AppHolder>
                <Provider store = {store}>     
                    <PublicRouter history = {history}/>
                </Provider>
                </AppHolder>
            </ThemeProvider>
        </IntlProvider>
    </LocaleProvider>;
};



Root.propTypes = {
    store: PropTypes.object.isRequired
};
export default Root;