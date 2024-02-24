import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = () => {
  const cartProducts = useSelector((state) => state.Cart.items);

  return (
    <div className="flex items-center gap-2">
      <div>
        <Link to="/cart">
          <p className="flex flex-row gap-2 items-center text-white">
            <span>
              <IoCartOutline />
            </span>
            Cart
          </p>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <p className="bg-primary rounded-full w-[28px] pt-1 h-[28px] text-center">{cartProducts.length || 0}</p>
      </div>
    </div>
  );
};

export default Card;
