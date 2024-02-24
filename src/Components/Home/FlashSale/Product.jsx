import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Product = ({ product }) => {
  const renderStars = () => {
    // start functionality
    const stars = [];
    const fullStars = Math.floor(product?.rating?.rate);
    const hasHalfStar = product?.rating?.rate % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={fullStars} className="text-yellow-500" />);
    }

    return stars;
  };

  //   discount price
  const originalPrice = product?.price;
  const discountPercentage = 15;
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;

  return (
    <div className="card xxl:w-96 bg-white shadow-lg lg:shadow-xl">
      <figure>
        <img src={product?.image} alt={product?.title} className="h-[250px]" />
      </figure>
      <div className="card-body">
        <p className="text-primary text-sm font-semibold">
          {product?.category}
        </p>
        <h2 className="card-title lg:text-sm text-secondary">
          {product?.title}
        </h2>
        <div className="flex items-center">
          <div className="flex items-center">
            {renderStars()}
            <span className="ml-1">{product?.rating?.rate}</span>
          </div>
          <p className="ms-2">({product?.rating?.count})</p>
        </div>
        <div className="card-actions justify-between mt-3">
          <div className="flex items-center gap-2">
            <p>${discountedPrice.toFixed(2)}</p>
            <p className="text-sm text-red-500 line-through">
              ${product?.price}
            </p>
          </div>
          <button className="btn button-primary-sm">
            <IoCartOutline /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
