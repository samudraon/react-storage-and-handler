import React from 'react';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic
    return (
        <div>
            <h2>Buy this: {name}</h2>
            <p>Only For: ${price}</p>
            <p><small>It has ID: {id}</small></p>
        </div>
    );
};

export default Cosmetic;