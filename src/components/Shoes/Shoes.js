import React from 'react';
import { add, multiply } from '../../Utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 13;
    const result = multiply(first, second);
    const sum = add(first, second);

    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>Result: {result} Total: {sum}</p>
        </div>
    );
};

export default Shoes;