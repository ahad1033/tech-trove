import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const FlashSale = () => {

    const [ product, setProduct] = useState([]);

    useEffect( () => {
        fetch('flashSales.json')
        .then (response => response.json())
        .then (data => setProduct(data))
    },[])

    return (
        // TO DO.....
        <section className='section-container'>
            <SectionTitle title={"Flash Sale"} />
            <div>
                
            </div>
        </section>
    );
};

export default FlashSale;