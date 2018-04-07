import React from 'react';

const CardFrame = ({children, title, settings}) => (
    <div className={`card bg-white text-dark ${settings.cardClass}`}>
        <div className={`card-header ${settings.headerClass}`}>
            {title}
        </div>
        {children}
    </div>
);

export default CardFrame;
