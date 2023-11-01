import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Product from './Product';

const FlashSale = () => {

    const [ products, setProducts] = useState([]);

    useEffect( () => {
        fetch('flashSales.json')
        .then (res => res.json())
        .then (data => setProducts(data))
    },[])
    console.log(products);
    return (
        // TO DO.....
        <section className='section-container'>
            <SectionTitle title={"Flash Sale"} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    products.map(product => <Product product={product} key={product.id}  />)
                }
            </div>
        </section>
    );
};

export default FlashSale;