import React, { useEffect, useState } from 'react';
import TopProduct from './TopProduct';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const TopHundred = () => {

    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        fetch('topHundred.json')
            .then(res => res.json())
            .then(data => {
                setTopProducts(data);
            });
    }, []);

    return (
        <div className='section-container'>
            {/* <h1 className="text-5xl text-center mt-20">Top100 will be here soon</h1> */}
            <SectionTitle title="Top 100" />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto'>
                {
                    topProducts.map((product) => <TopProduct product={product} key={product.id} />)
                }
            </div>
        </div>
    );
};

export default TopHundred;
