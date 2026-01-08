import React, {useState} from 'react';
import MensajeIngles from './../language/en.json';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();


const LangProvider = ({children}) => {
    const [mensaje] = useState(MensajeIngles);
    const [locale] = useState('en-US');

    const selectLanguage = () => {
        // English only
    }
    return (
        <langContext.Provider value={{selectLanguage: selectLanguage}}>
            <IntlProvider locale={locale} messages={mensaje}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export {LangProvider, langContext};