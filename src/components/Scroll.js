import React from 'react';
export const Scroll = (props) => (
    <div style={{overflow: 'scroll',scroll:'invisible', border: '1px solid black', height: '800px'}}>
        {props.children}
    </div>
);