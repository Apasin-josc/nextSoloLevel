import { store } from './index';
import { Provider } from 'react-redux';
import React from 'react';

interface Props {
    children: React.ReactNode;
}
export const Providers: React.FC<Props> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
