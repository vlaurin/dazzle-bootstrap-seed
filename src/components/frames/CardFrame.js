import React from 'react';

const CardFrame = ({children, title}) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {children}
        </div>
    </div>
);

export default CardFrame;