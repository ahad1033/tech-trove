import React, { useEffect, useState } from 'react';
import TopProduct from './TopProduct';

const TopHundred = () => {

    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        fetch('topHundred.json')
            .then(res => res.json())
            .then(data => setTopProducts(data))
    }, [])


    return (
        <div className='section-container'>
            <h1 className="text-5xl text-center mt-20">Top100 will be here~soon</h1>
            {
                topProducts.map(product => <TopProduct product={product} key={product.id} />)
            }
        </div>
    );
};

export default TopHundred;