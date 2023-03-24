import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {
        console.log('item added', id)
    }

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only For: ${price}</p>
            <p><small>It has ID: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;