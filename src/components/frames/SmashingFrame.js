import React from 'react';
import FontAwesomeOverlay from './FontAwesomeOverlay';

const defaultBackgroundColour = '#666';
const defaultForegroundColour = '#fff';

const themeTomorrowNight = {
    'background': '#1d1f21',
    'foreground': '#c5c8c6',
    'red': '#cc6666',
    'orange': '#de935f',
    'yellow': '#f0c674',
    'green': '#b5bd68',
    'aqua': '#8abeb7',
    'blue': '#81a2be',
    'purple': '#b294bb',
};

const baseStyle = {
    minHeight: '200px',
};

const backgroundColour = (theme, colour) => theme[colour] || colour || defaultBackgroundColour;
const foregroundColour = (theme, colour) => theme[colour] || colour || defaultForegroundColour;

const SmashingFrame = ({children, settings}) => {
    let style = Object.assign({}, baseStyle, {
        backgroundColor: backgroundColour(themeTomorrowNight, settings.colour),
        color: foregroundColour(themeTomorrowNight, settings.foreground),
    });

    return (
        <div className={`card text-center rounded-0`} style={style}>
            {children}
            {settings.icon ? <FontAwesomeOverlay icon={settings.icon} /> : null}
        </div>
    );
};

export default SmashingFrame;
