import React from 'react';
import FontAwesomeOverlay from './FontAwesomeOverlay';
import { consumeTheme } from '../../themes/ThemeContext';

const defaultBackgroundColour = '#666';
const defaultForegroundColour = '#fff';

const style = {
    card: {
        marginBottom: '30px',
        minHeight: '200px',
        fontWeight: '600',
    },
    children: {
        zIndex: '10'
    }
};

const backgroundColour = (theme, colour) => theme[colour] || colour || defaultBackgroundColour;
const foregroundColour = (theme, colour) => theme[colour] || colour || defaultForegroundColour;

const SmashingFrame = ({children, settings, theme}) => {
    let cardStyle = Object.assign({}, style.card, {
        backgroundColor: backgroundColour(theme, settings.colour),
        color: foregroundColour(theme, settings.foreground),
    });

    return (
        <div className='card justify-content-center rounded-0' style={cardStyle}>
            <div style={style.children}>{children}</div>
            {settings.icon ? <FontAwesomeOverlay icon={settings.icon} /> : null}
        </div>
    );
};

const ThemedSmashingFrame = consumeTheme(SmashingFrame);

export default ThemedSmashingFrame;
