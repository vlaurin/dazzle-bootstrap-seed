import React from 'react';

const CardFrame = ({children, title}) => (
    <div className="card bg-white text-dark">
        <div className="card-header">
            {title}
        </div>
        {children}
    </div>
);

export default CardFrame;