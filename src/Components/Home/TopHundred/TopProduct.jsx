import { AiOutlineHeart } from 'react-icons/ai'

const TopProduct = ({ product }) => {

    const { companyName, productDetails, productImg, ratings, price, discountPrice } = product;

    return (
        <div className="card w-80 bg-base-100 shadow-xl  mx-auto">
            <img className='' src={productImg} alt="Top100" />
            <div className="card-body px-6">
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className="card-title">{companyName}</h2>
                        <p className='text-xs mt-2'>{productDetails}</p>
                    </div>
                    <div>
                        <AiOutlineHeart className='text-2xl' />
                    </div>
                </div>
                <div className='flex mt-2'>
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