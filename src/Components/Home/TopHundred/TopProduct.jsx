import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const TopProduct = ({ product }) => {
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

  return (
    <div className="card xxl:w-96 bg-white shadow-lg lg:shadow-xl">
      <figure  className="px-2 pt-3">
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
          <p>${product?.price}</p>
          <button className="btn button-primary-sm">
            <IoCartOutline /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
