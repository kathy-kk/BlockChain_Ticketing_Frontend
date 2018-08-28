import antdEn from 'antd/lib/locale-provider/en_US';
import appLocaleData from 'react-intl/locale-data/en';
import enMessages from './message_en_US.json';
import { addLocaleData } from 'react-intl';

const EnLang = {
    messages: {
        ...enMessages,
    },
    antd: antdEn,
    locale: 'en-US',
    data: appLocaleData,
};

const AppLocale = {
    en: EnLang
};

addLocaleData(AppLocale.en.data);
export default AppLocale;