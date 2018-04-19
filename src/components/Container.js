import React from 'react';
import { consumeTheme } from '../themes/ThemeContext';

const Container = ({theme, children}) => {
    return (
        <div className="h-100 container-fluid" style={{backgroundColor: theme.background}}>
            {children}
        </div>
    );
};

const ThemedContainer = consumeTheme(Container);

export default ThemedContainer;
