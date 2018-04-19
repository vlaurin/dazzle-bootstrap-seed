import React from 'react';

import Dashboard from './components/Dashboard';
import { provideTheme } from './themes/ThemeContext';
import ThemeTomorrow from './themes/Tomorrow';

// Default styles.
import 'bootstrap/dist/css/bootstrap.css';
import 'react-dazzle/lib/style/style.css';
import './style.css';

const App = () => <Dashboard/>;

const ThemedApp = provideTheme(App, ThemeTomorrow);

export default ThemedApp;
