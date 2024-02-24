import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = () => {
  return (
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
  );
};

export default Card;
