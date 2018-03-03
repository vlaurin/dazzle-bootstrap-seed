import React from 'react';

const CardFrame = ({children, title}) => (
    <div className="card bg-white text-dark">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {children}
        </div>
    </div>
);

export default CardFrame;