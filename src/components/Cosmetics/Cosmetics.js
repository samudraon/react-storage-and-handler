import React, { useEffect, useState } from 'react';
import { add } from '../../Utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../Utilities/calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}

                ></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;