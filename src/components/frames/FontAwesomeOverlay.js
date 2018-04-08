import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const style = {
    fontSize: '10vw',
    color: 'white',
    opacity: '.4',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const FontAwesomeOverlay = ({icon}) => (
    <div style={style}>
        <FontAwesomeIcon icon={icon} />
    </div>
);

export default FontAwesomeOverlay;
