import React from 'react';

const Product = ({ product }) => {

    const { productName, productDetails, productImg, ratings, price, offerPrice } = product;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={productImg} alt="Shoes" /></figure>
            <div className="card-body px-16">
                <h2 className="card-title text-center">{productName}</h2>
                <p>{productDetails}</p>
                <div className='flex'>
                    <p className='line-through'>${offerPrice}</p>
                    <p className='text-right text-red-500'>${price}</p>
                </div>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default Product;