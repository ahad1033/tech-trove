import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  updateItemCount,
} from "../../../Redux/features/Cart/CartSlice";
import Swal from "sweetalert2";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Cart.items);

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === product?.id);

    if (existingItem) {
      dispatch(
        updateItemCount({ id: product?.id, count: existingItem.count + 1 })
      );
    } else {
      dispatch(addToCart({ ...product, count: 1 }));
    }

    const updatedLocalCart = JSON.parse(localStorage.getItem("cart")) || {
      items: [],
    };

    const localExistingItem = updatedLocalCart.items.find(
      (item) => item.id === product.id
    );

    if (localExistingItem) {
      localExistingItem.count += 1;
    } else {
      updatedLocalCart.items.push({ ...product, count: 1 });
    }

    Swal.fire({
      icon: "success",
      position: "top-right",
      title: "Item added to cart",
      showConfirmButton: false,
      timer: 1500,
    });

    localStorage.setItem("cart", JSON.stringify(updatedLocalCart));
  };

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
          <button className="btn button-primary-sm" onClick={handleAddToCart}>
            <IoCartOutline /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
