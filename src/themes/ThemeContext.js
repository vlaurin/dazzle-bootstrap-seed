import React from 'react';
import ThemeTomorrow from './Tomorrow';

const ThemeContext = React.createContext(ThemeTomorrow);

const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

const provideTheme = (WrappedComponent, theme) => (props) => (
    <ThemeProvider value={theme}>
        <WrappedComponent {...props}/>
    </ThemeProvider>
);

const consumeTheme = (WrappedComponent) => (props) => (
    <ThemeContext.Consumer>
        {theme => <WrappedComponent {...props} theme={theme} />}
    </ThemeContext.Consumer>
);

export default ThemeContext;
export {
    ThemeProvider,
    provideTheme,
    ThemeConsumer,
    consumeTheme,
};
