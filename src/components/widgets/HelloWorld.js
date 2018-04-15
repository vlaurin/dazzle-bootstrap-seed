import React from 'react';

const HelloWorld = ({title, subtitle}) => (
    <div className="card-body text-center">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </div>
);

export default HelloWorld;
