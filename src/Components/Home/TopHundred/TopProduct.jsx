import React from 'react';

const TopProduct = ( {product} ) => {
    
    const { companyName, productDetails, productImg, ratings, price, discountPrice} = product;

    return (
        <div className="card w-80 bg-base-100 shadow-xl justify-center"> 
            <img className='' src={productImg} alt="Top100" />
            <div className="card-body px-16">
                <h2 className="card-title">{companyName}</h2>
                <p>{productDetails}</p>
                <div className='flex'>
                    <p className='line-through'>${price}</p>
                    <p className='text-right text-red-500'>${discountPrice}</p>
                </div>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default TopProduct;