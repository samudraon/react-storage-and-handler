import React from 'react';
import { addToDb } from '../../Utilities/fakeDb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }
    const removeFromCart = id => {
        console.log('removing', id);
    }

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only For: ${price}</p>
            <p><small>It has ID: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;